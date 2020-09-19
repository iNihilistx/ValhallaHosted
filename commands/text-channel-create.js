const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const name = message.content.replace('??maketextchannel ', '')
    message.guild.channels
        .create(name, {
            type: 'text',
        })
        .then((channel) => {
            const categoryId = '737386428144812163'
            channel.setParent(categoryId)
        })
}

module.exports.config = {
    name: "maketextchannel",
    usage: "??maketextchannel",
    description: "makes a new text channel",
    aliases: []
}