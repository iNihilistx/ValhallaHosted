const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGE')) {
        message.reply('You do not have the required permissions needed for this command!').then(m => m.delete({timeout: 6000}))
        message.delete()
        return;
    } else {
        const fetchedChannel = message.guild.channels.cache.get(channel_id);
        fetchedChannel.delete()
    }
}

module.exports.config = {
    name: "delete",
    usage: "??delete",
    aliases: []
}