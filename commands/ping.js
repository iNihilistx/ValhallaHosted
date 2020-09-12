const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    var yourping = new Date().getTime() - message.createdTimeStamp
    var botping = Math.round(bot.ws.ping)

    message.channel.send("The Current Ping...").then(m => {
        var ping = m.createdTimeStamp - message.createdTimeStamp;

        var ping = new Discord.MessageEmbed()
            .setAuthor(` Valhallas ping is: ${botping}ms`)
            .setColor(`#FFA500`)
            .setTimestamp()

        m.edit(ping)
    });

}

module.exports.config = {
    name: "ping",
    usage: "=ping",
    description: "",
    aliases: []
}