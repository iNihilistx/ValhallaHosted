const usedCommand = new Set();
const Discord = require('discord.js');
const { duration } = require('moment');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const images = ["https://i.imgur.com/Nudh7mq.gif", "https://i.imgur.com/LgK8jm6.gif", "https://i.imgur.com/XIXkCDU.gif"];
    const image = images[Math.floor(Math.random() * images.length)];

    if (usedCommand.has(message.author.id)) {
        message.reply("You are currently in a cooldown. Wait 15 seconds then try again...").then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        let member = message.mentions.members.first();
        if (member) {
            try {
                const hugEmbed = new Discord.MessageEmbed()
                    .setColor('#FFA500')
                    .setTitle(`Love is in the air. A hug has been shared`)
                    .setURL('https://i.imgur.com/G5bui5n.png')
                    .setImage(image)
                    .setTimestamp()
                    .setFooter("https://i.imgur.com/G5bui5n.png")

                message.channel.send(hugEmbed);

                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 15000)
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}
module.exports.config = {
    name: "hug",
    description: "",
    usage: "??hug",
    accessableby: "Members",
    aliases: []
}