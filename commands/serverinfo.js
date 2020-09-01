const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    module.exports.config = {
        name: "serverinfo",
        description: "shows server information",
        usage: "-serverinfo",
        accessableby: "Members",
        aliases: []
    }