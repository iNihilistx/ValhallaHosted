const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("https://github.com/Naiirobii")
}

module.exports.config = {
    name: "github",
    description: "",
    usage: "-github",
    accessableby: "Members",
    aliases: []
}
