const usedCommand = new Set();
const Discord = require('discord.js');
const { duration } = require('moment');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {

    const images = ["https://i.imgur.com/1dDkQNL.gif", "https://i.imgur.com/rjTA8fC.gif", "https://i.imgur.com/Pg4Kp2q.gif", "https://i.imgur.com/NpYpXgI.gif", "https://i.imgur.com/jJ2N5Zu.gif", "https://i.imgur.com/K6bWrmL.gif"];
    const image = images[Math.floor(Math.random() * images.length)];

    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        const uwuEmbed = new Discord.MessageEmbed()
            .setColor("#FFA500")
            .setTitle('UWU')
            .setURL('https://i.imgur.com/G5bui5n.png')
            .setImage(image)
            .setTimestamp()
            .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')



        message.channel.send(uwuEmbed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000);
    }
}

module.exports.config = {
    name: "uwu",
    description: "",
    usage: "=uwu",
    accessableby: "Members",
    aliases: []
}