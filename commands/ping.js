const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("pinging...");
    m.edit(`Recieved! Latency is ${m.createdTimeStamp - message.createdTimeStamp}ms. API Latency is${Math.round(bot.ping)}ms `);

}

module.exports.config = {
    name: "ping",
    usage: "=ping",
    description: "",
    aliases: []
}