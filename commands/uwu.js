const Discord = require('discord.js');
const Botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {

    const images = ["https://i.imgur.com/NpYpXgI.gif", "https://i.imgur.com/jJ2N5Zu.gif", "https://i.imgur.com/K6bWrmL.gif"];
    const image = images[Math.floor(Math.random() * images.length)];
    const uwuEmbed = new Discord.MessageEmbed()
        .setColor("#FFA500")
        .setTitle('UWU')
        .setURL('https://i.imgur.com/G5bui5n.png')
        .setImage(image)
        .setTimestamp()
        .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')



    message.channel.send(uwuEmbed);
}

module.exports.config = {
    name: "uwu",
    description: "",
    usage: "=uwu",
    accessableby: "Members",
    aliases: []
}