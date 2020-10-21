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
            title: `Thank you for adding me!`,
            color: 0x00AE86,
            description: "Do not disconnect Valhalla Music by clicking disconnect, use the stop command. Valhalla Music allows for both name song search and link. \n Thank you for choosing Valhalla Music!",
            fields: [
                {
                    name: 'My Prefix is:',
                    value: '``=``'
                },
                {
                    name: ":notes: Music Commands: ",
                    value: 'play, pause, resume, skip, volume, queue, repeat, stop'
                },
                {
                    name: ':tools: Utility Commands: ',
                    value: 'help, ping, invite'
                },
            ],
            footer: {
                icon_url: client.user.avatarURL(),
                text: "© Valhalla_Music"
            }
        }
    })
})


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