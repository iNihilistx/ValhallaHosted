const usedCommand = new Set();
const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        message.channel.send({
            embed: {
                author: {
                },
                title: "The Current Commands For Valhalla: ",
                description: "All commands within Valhalla are subject to change and may or may not be included within the final editon. For further help with a command insert the prefix along with the command followed by help in order to get an example on how the command is used.",
                fields: [{
                    name: " My prefix is: ",
                    value: "``??``"
                },
                {
                    name: "🛡️ Moderation Commands: ",
                    value: "kick, ban, warn, server, member, purge, createchannel"
                },
                {
                    name: "🤖 Random Bot Commands: ",
                    value: "poll, meme, uwu, wholesome, hug, cursed, slap, hangman"
                },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL(),
                    text: "© Valhalla"
                }
            }
        })
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 20000)
    }
}

module.exports.config = {
    name: "help",
    description: "sends the commands to the guild",
    usage: "??help",
    accessableby: "Members",
    aliases: ["commands"]
}