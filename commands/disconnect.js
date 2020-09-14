const Discord = require('discord.js')
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply('Missing the needed permissions');

    const member = message.mentions.members.first();
    if (!member) return message.reply('You need to @mention a user to disconnect from the voice channel');
    if (!member.voiceChannel) return message.reply('That user isn\'t in a voice channel');

    member.setVoiceChannel(null);

    message.react('👌')
}

module.exports.config = {
    name: "disconnect",
    usage: "??disconnect",
    description: "removes a user from the voice channel",
    accessableby: "Admin",
    aliases: []
}