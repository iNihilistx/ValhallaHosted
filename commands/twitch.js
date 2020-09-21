const Discord = require('discord.js')
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    message.channel.send("https://www.twitch.tv/abyssater")
}

module.exports.config = {
    name: "twitch",
    usage: "??twitch",
    aliases: []
}