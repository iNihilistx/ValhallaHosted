const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You lack the permissions needed for this command!');
    if (!args[0]) return message.channel.send("Please provide a new prefix");
    if (args[1]) return message.channel.send("The Prefix cannot have two spaces!");
    db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`The prefix has successfully been changed to **${args[0]}**`)
}

module.exports.config = {
    name: "prefix",
    usage: "-prefix",
    description: "changes the prefix",
    accessableby: "MANAGE_SERVER",
    alias: []
}