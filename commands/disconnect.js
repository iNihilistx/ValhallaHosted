const Discord = require('discord.js')
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    // Make sure the bot user has permissions to move members in the guild:
    if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply('Missing the required `Move Members` permission.');

    // Get the mentioned user/bot and check if they're in a voice channel:
    const member = message.mentions.members.first();
    if (!member) return message.reply('You need to @mention a user/bot to kick from the voice channel.');
    if (!member.voiceChannel) return message.reply('That user/bot isn\'t in a voice channel.');

    // Now we set the member's voice channel to null, in other words disconnecting them from the voice channel.
    member.setVoiceChannel(null);

    // Finally, pass some user response to show it all worked out:
    message.react('👌');
}

module.exports.config = {
    name: "disconnect",
    usage: "??disconnect",
    description: "removes a user from the voice channel",
    accessableby: "Admin",
    aliases: []
}