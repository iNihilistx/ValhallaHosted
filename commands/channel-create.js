const Discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You don't have the correct permissions");
    if (!args[0]) return message.channel.send("please include a name for the channel");
    message.guild.channels.create(args.slice(0).join(" "), { type: 'text' }), message.channel.send("channel has been created")
}

module.exports.config = {
    name: "createchannel",
    usage: "cchannel",
    aliases: ['createchannel']
}