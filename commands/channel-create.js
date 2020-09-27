const Discord = require('discord.js');
module.exports.run = (bot, message) => {
    const args = message.content.slice(15);
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You lack the permissions needed for this command!");
    else {
        message.guild.channels.create(`${args}`).then(channel => {
            channel.setTopic(`New Channel!`)
        })
    }
}

module.exports.config = {
    name: "createchannel",
    usage: "cchannel",
    aliases: ['createchannel']
}