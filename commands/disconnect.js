const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let randomnumber = Math.floor(Math.random() * 9000 + 1000)

    await receivedMessage.guild.createChannel(`voice-kick-${randomnumber}`, "voice")
    await vcUser.setVoiceChannel(receivedMessage.guild.channels.find(r => r.name === `voice-kick-${randomnumber}`))
    receivedMessage.guild.channels.find(r => r.name === `voice-${randomnumber}`).delete()
}

module.exports.config = {
    name: "disconnect",
    usage: "??disconnect",
    description: "",
    aliases: []
}