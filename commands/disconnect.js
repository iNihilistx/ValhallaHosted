const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    // Make sure the bot user has permissions to move members in the guild:
    if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply('Missing the required `Move Members` permission.');

    const member = message.mentions.members.first();
    if (!member) return message.reply('You need to @mention a user in order to kick them from the voice channel.');
    if (!member.voiceChannel) return message.reply('That user isn\'t in a voice channel.');

    member.member.voice.kick();

    message.react('👌');
}

module.exports.config = {
    name: "disconnect",
    usage: "??disconnect",
    description: "",
    aliases: []
}