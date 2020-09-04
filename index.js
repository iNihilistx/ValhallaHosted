const Discord = require('discord.js');
const botsettings = require('./config.json');

const bot = new Discord.Client({ disableEveryone: true });

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')

    welcomeChannel.send(`${member} has joined the cult`)
})

bot.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye")
    welcomeChannel.send(` ${member} has left the cult`)
})

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "setnick")) {

        let nick = message.content.slice((prefix + "setnick").length)
        if (!nice) return message.channel.send("please enter a nickname").then(r => r.delete(5000))

        message.guild.members.forEach(r => r.setNickname(nick + r.user.username))

        message.channel.send("changing nicknames");
    }
})

require("./util/eventHandler")(bot)

const fs = require("fs");
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