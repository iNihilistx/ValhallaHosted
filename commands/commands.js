const usedCommand = new Set();
const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply("You are currently in a cooldown. Wait 15 seconds then try again...").then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(`The current available commands`)
            .setAuthor('``` server - ??server | member - ??member @user | mute - ??mute @user | unmute - ??unmute @user | kick - ??kick @user | ban - ??ban @user | poll - ??poll #poll-channel this is a poll | meme - ??meme | uwu - ??uwu | wholesome - ??wholesome | hug - ??hug @user | aesthetic - ??aesthetic | cursed - ??cursed ```')
            .addFields({ name: 'Valhalla Prefix:', value: '```??```', inline: true })
            .setColor('#FFA500')
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(helpEmbed)

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000)
    }
}

module.exports.config = {
    name: "commands",
    description: "sends the commands to the guild",
    usage: "??commands",
    accessableby: "Members",
    aliases: []
}