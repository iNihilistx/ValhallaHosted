const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({timeout:6000}))
        message.delete()
        return;
    } else {
        let user = message.guild.member(message.mentions.user.first()) || message.guild.members.get(args[0])
        if(!user) return message.channel.send("Invalid User to warn!")
        let warnreason = args.join(" ").slice(22);
        if(!warnreason) {
            warnreason = "None"
        }   
        const person = message.mentions.user.first()
        const embed = new Discord.MesssageEmbed()
        .setTitle(person.username + " has been warned by: " + message.author.username)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        message.channel.send(embed)
    }
}
module.exports.config = {
    name: "warn",
    usage: "??warn",
    accessableby: "Moderators",
    aliases: []
}