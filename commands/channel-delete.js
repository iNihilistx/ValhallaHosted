const usedCommand = new Set();

const Discord = require('discord.js');
module.exports.run = async (bot, message) => {
    const args = message.content.slice(15);
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 6000 }))
        message.delete()
        return;
    } else {
        message.guild.channels.delete(`${args}`).then(channel => {
            message.reply('channel has been deleted!')
        })
    }

    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 6000);
}

module.exports.config = {
    name: "deletechannel",
    usage: "??deletechannel",
    aliases: []

}