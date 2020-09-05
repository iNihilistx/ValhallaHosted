const Discord = require('discord.js');
const Botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const purposeEmbed = new Discord.MessageEmbed()
        .setImage('https://i.imgur.com/sdNIc8t.gif')
        .setTitle('What is my purpose?')
        .setURL('https://i.imgur.com/sdNIc8t.gif')

    message.channel.send(purposeEmbed);
}

module.exports.config = {
    name: "purpose",
    description: "",
    usage: "=purpose",
    accessableby: "Members",
    aliases: []
}