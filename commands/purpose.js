const Discord = require('discord.js');
const Botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const purposeEmbed = new Discord.MessageEmbed()
        .setColor("#FFA500")
        .setImage('https://i.imgur.com/sdNIc8t.gif')
        .setTitle('You pass butter')
        .setTimestamp()
        .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(purposeEmbed);
}

module.exports.config = {
    name: "purpose",
    description: "",
    usage: "=purpose",
    accessableby: "Members",
    aliases: []
}