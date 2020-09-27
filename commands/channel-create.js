const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You lack the permissions needed for this command!");
    if (!args[0]) return message.channel.send("Please include the name for the channel after entering the command!");
    message.guild.channels.create(args.slice(0).join(" "), { type: 'text' }), message.channel.send("Channel has been created!")
}

module.exports.config = {
    name: "createchannel",
    usage: "cchannel",
    aliases: ['createchannel']
}