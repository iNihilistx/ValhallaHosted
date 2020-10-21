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
                title: `Thank you for adding me!`,
                color: 0x00AE86,
                description: "All commands within Valhalla are subject to change and may or may not be included within the final editon. \n to see how a command functions type the prefix and the command followed by help to see how the command is used!",
                fields: [
                    {
                        name: 'My Prefix is:',
                        value: "``??``"
                    },
                    {
                        name:  "🛡️ Moderation Commands: ",
                        value: 'kick, ban, warn, server, member, purge, createchannel'
                    },
                    {
                        name: "🤖 Random Bot Commands:",
                        value: "poll, meme, uwu, wholesome, hug, cursed, slap, hangman"
                    },
                ],
                footer: {
                    icon_url: client.user.avatarURL(),
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