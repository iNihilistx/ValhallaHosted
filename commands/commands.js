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
            .setColor('#FFA500')
            .setTitle('Commands for Valhalla using ??', true)
            .addField("server", "??server")
            .addField('member <@>', "??member @exampleuser", true)
            .addField('mute <@>', "?? mute @exampleuser")
            .addField('unmute <@>', "?? unmute @exampleuser", true)
            .addField('kick <@>', "??kick @exampleuser")
            .addField('ban <@>', "??ban @exampleuser", true)
            .addField('poll <#> <text>', "??poll #pollchannel this is a poll")
            .addField('meme', "??meme", true)
            .addField('uwu', "??uwu")
            .addField('wholesome', "??wholesome", true)
            .addField('hug <@>', "??hug @exampleuser")
            .addField('cursed', "??cursed", true)
            .setTimestamp()
            .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')

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