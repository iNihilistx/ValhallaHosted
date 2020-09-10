const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.includes("faggot", "Faggot", "nigger", "Nigger")) {
        message.delete().catch(err => console.log)
        message.reply("please refrain from using these words").then(msg => {
            msg.delete("5000")
        })
    }
}

module.exports.config = {
    name: "illegal",
    usage: "",
    description: "blocks certain words",
    aliases: []
}