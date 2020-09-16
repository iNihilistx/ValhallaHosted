const usedCommand = new Set();
const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown. Wait 30 seconds before trying this command again...').then(m => m.delete({ timeout: 8000 }))
        message.delete()
        return;
    } else {

        var yourping = new Date().getTime() - message.createdTimeStamp
        var botping = Math.round(bot.ws.ping)

        message.channel.send("Checking...").then(m => {
            var ping = m.createdTimeStamp - message.createdTimeStamp;

            var ping = new Discord.MessageEmbed()
                .setAuthor(` The Ping For Valhalla is: ${botping}ms`)
                .setColor(`#FFA500`)
                .setTimestamp()
                .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

            m.edit(ping)
        });

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 30000);
    }

}

module.exports.config = {
    name: "ping",
    usage: "??ping",
    description: "",
    aliases: []
}