const usedCommand = new Set();
const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown. Wait 15 seconds before trying this command again...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('My Commands are: ')
            .addFields(
                { name: "Server" },
                { name: "member <@>" },
                { name: "mute <@>" },
                { name: "unmutemute <@>" },
                { name: "kick <@>" },
                { name: "ban <@>" },
                { name: "poll <#> <text>" },
                { name: "meme" },
                { name: "uwu" },
                { name: "wholesome" },
                { name: "hug <@>" }
                { name: "aesthetic" },
                { name: "cursed" }
            )
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')
        message.channel.send(helpEmbed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000)
    }
}

module.exports.config = {
    name: "Help",
    description: "shows all the commands for the bot",
    usage: "??commands",
    accessableby: "Members",
    aliases: []
}