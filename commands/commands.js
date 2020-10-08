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
                color: 0x00AE86,
                author: {

                },
                title: "The Current Commands For Valhalla: ",
                description: "All commands within Valhalla are subject to change and may or may not be included within the final editon.",
                fields: [{
                    name: " My prefix is: ",
                    value: "``??``"
                },
                {
                    name: "🛡️ Moderation: ",
                    value: "kick, ban, server, member, purge, createchannel"
                },
                {
                    name: "🤖 Random bot commands: ",
                    value: "poll, meme, uwu, wholesome, hug, cursed"
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