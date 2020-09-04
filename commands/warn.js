const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You lack the permissions needed for this command!");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You need to mention a user in order to warn them!');
    if (reason.length < 1) return message.reply('You need a reason for the warning!');

    let dmsEmbed = new Discord.MessageEmbed()
        .setTitle("Warning")
        .setColor('#FFA500')
        .setDescription(`You have been warned on \`${message.guild.name}\``)
        .addField("Warned by", message.author.tag)
        .addField("Reason", reason);

    user.send(dmsEmbed);

    message.delete();

    message.channel.send(`${user.tag} has been warned`)
}

module.exports.config = {
    name: "warn",
    description: "warns a user of the guild",
    usage: "-warn",
    aliases: []
}