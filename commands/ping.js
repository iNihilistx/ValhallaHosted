const Discord = require('discord.js')
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
        var ping = m.createdTimeStamp - message.createdTimeStamp;

        var ping = new Discord.MessageEmbed()
            .setAuthor(`Your current ping is ${ping}`)
            .setColor('#FFA500')
            .setTimestamp()

        m.edit(embed)
    });
}

module.exports.config = {
    name: "ping",
    description: "shows ping",
    usage: "=ping",
    accessableby: "Members",
    aliases: []
}