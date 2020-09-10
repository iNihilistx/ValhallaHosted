const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const swears = ["nigger", "Nigger", "fag", "Fag", "Faggot", "faggot"];
    if (swears.some(word => message.content.includes(word))) {
        message.reply("Prohibited words have been included");
        message.delete().catch(e => { });
    }
}

module.exports.config = {
    name: "illegal",
    usage: "",
    description: "blocks certain words",
    aliases: []
}