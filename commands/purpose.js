const usedCommand = new Set();
const Discord = require('discord.js');
const Botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {

    if (usedCommand.has(message.author.id)) {
        message.reply("You are currently in a cooldown. Wait 15 seconds and try again...").then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {

        const purposeEmbed = new Discord.MessageEmbed()
            .setColor("#FFA500")
            .setImage('https://i.imgur.com/sdNIc8t.gif')
            .setTitle('What is my purpose')
            .setDescription('You pass butter')
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(purposeEmbed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000);
    }
}
module.exports.config = {
    name: "purpose",
    description: "",
    usage: "??purpose",
    accessableby: "Members",
    aliases: []
}