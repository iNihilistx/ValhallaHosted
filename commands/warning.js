const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 6000 }))
        message.delete()
        return;
    } else {
        const member = message.mentions.members.first();
        const warnEmbed = new Discord.MessageEmbed()
        .setDescription(`${member} has been warned for ${args.slice(0).join(' ')}`)
        .setColor('orange')
        message.channel.send(warnEmbed)
}
}

module.exports.config = {
    name: "warn",
    usage: "??warn",
    aliases: []
}