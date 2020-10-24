const Discord = require('discord.js');
const botsettings = require('./config.json');
const usedCommand = new Set();

const bot = new Discord.Client({ disableEveryone: true });

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')

    welcomeChannel.send(`${member} has joined the server!`)
})

bot.on("message", async message => {
    const filterList = require('./filter.json');

    if(
        filterList.some((word) => message.content.toLowerCase().includes(word))
    ) {
        message.delete();
        message.channel.send('This type of link extension is not allowed!')
    }
})

bot.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send({
        embed: {
            author: {
            },
            title: "The Current Commands For Valhalla: ",
            description: "All commands within Valhalla are subject to change and may or may not be included within the final editon. \n For further help with a command insert the prefix along with the command followed by help in order to get an example on how the command is used.",
            fields: [{
                name: " My prefix is: ",
                value: "``??``"
            },
            {
                name: "🛡️ Moderation Commands: ",
                value: "kick, ban, warn, server, member, purge, createchannel"
            },
            {
                name: "🤖 Random Bot Commands: ",
                value: "poll, meme, uwu, wholesome, hug, cursed, slap, hangman"
            },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL(),
                text: "© Valhalla"
            }
        }
    })
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    switch(args[0]){
        case 'report':
            message.delete({timeout: 3000});
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!target) return message.channel.send('Please provide a user that you wish to report').then(m => m.delete({timeout: 15000}));
  
            let reason = args.slice(2).join(" ");
            if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.username}**`).then(m => m.delete({timeout: 15000}));
  
            let reportChannel = message.guild.channels.cache.find(x => x.name === "logs");
  
            message.channel.send('Your report has been filed to the staff team. Thank you for reporting!').then(m => m.delete({timeout: 15000}));
            reportChannel.send(`**${message.author.username}** has reported **${target.user.username}** for **${reason}**.`);
        break;
      };
  });

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (cmd === '??poll') {
        if (usedCommand.has(message.author.id)) {
            (await message.reply("You are currently in a cooldown. Wait 10 seconds and try again...")).attachments(m => m.delete({ timeout: 5000 }))
        } else {


            let pollChannel = message.mentions.channels.first();
            let pollDescription = args.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
                .setTitle(`🗳️ New Poll For: ${message.mentions.guild} 🗳️`)
                .setDescription(pollDescription)
                .setColor('ORANGE')
            let msgEmbed = await pollChannel.send(embedPoll);
            await msgEmbed.react('✅')
            await msgEmbed.react('❌')
        }

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }
})

require("./util/eventHandler")(bot)

const fs = require("fs");
const { isContext } = require('vm');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});


bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ') + 1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)

})

bot.login(process.env.token);