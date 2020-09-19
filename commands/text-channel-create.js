const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let name = message.author.username;
    message.guild.createChannel(name, 'text')
        .then(console.log)
        .catch(console.error);
}

module.exports.config = {
    name: "maketextchannel",
    usage: "??maketextchannel",
    description: "makes a new text channel",
    aliases=[]
}