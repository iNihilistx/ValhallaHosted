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
            .setAuthor(`The current available commands:`)
            .setDescription('```| server |  member <@> | mute <@> | unmute <@> | kick <@> | ban <@> | poll <#> <text>  | meme | uwu | wholesome | aesthetic | cursed | ```')
            .addFields({ name: 'Chosen Prefix: ', value: '```??```', inline: true })
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