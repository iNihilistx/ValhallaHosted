const Discord = require('discord.js')
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let pollEmbed = new Discord.MessageEmbed()
        .setTitle('New Poll')
        .setDescription(pollDescription)
        .setColor('ORANGE')
    let msgEmbed = await pollChannel.send(pollEmbed);
}