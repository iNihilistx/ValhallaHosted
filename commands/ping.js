const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        var ping = m.createdTimeStamp - message.createdTimeStamp;

        var ping = new Discord.MessageEmbed()
            .setAuthor(`Your ping is: ${ping}`)
            .setColor(`#FFA500`)

        m.edit(ping)
    });

}

module.exports.config = {
    name: "ping",
    usage: "=ping",
    description: "",
    aliases: []
}