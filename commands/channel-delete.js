const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGE')) {
        message.reply('You do not have the required permissions needed for this command!').then(m => m.delete({timeout: 6000}))
        message.delete()
        return;
    } else {
        const { guild } = message
        const channel = guild.channels.cache
        .filter((channel) => {
            return channel.name === text
        })
        .first()

        if(!channel) {
            message.reply("That channel does not exist!")
            return
        }

        channel.delete()
        message.reply("Successfully deleted channel")
        return
    }
}

module.exports.config = {
    name: "delete",
    usage: "??delete",
    aliases: []
}