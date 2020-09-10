const Discord = require('discord.js')
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send('Pinging...');

    const latency = msg.createdTimeStamp - message.createdTimeStamp;
    const choices = ['Damn... thats like my ping or something', 'please dont be bad'];
    const response = choices[Math.floor(Math.random() * choices.length)];

    msg.edit(`${response} - Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);

}

module.exports.config = {
    name: "ping",
    usage: "=ping",
    description: "",
    aliases: []
}