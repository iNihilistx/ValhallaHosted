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
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "The commands for valhalla: ",
                description: "All of the available commands for [??]Valhalla",
                fields: [{
                    name: "??server",
                    value: "??server (displays all information for the guild)"
                },
                {
                    name: "??member",
                    value: "??member <@user> (Displays information regarding the mentioned user)"
                },
                {
                    name: "??purge",
                    value: "??purge <1-99> (Allows messages from 1-99 to be deleted in bulk)"
                },
                {
                    name: "??mute",
                    value: "??mute <@user> (Adds the mute role and removes the ability for voice communication)"
                },
                {
                    name: "??unmute",
                    value: "??unmute <@> (Takes away the mute role and reinstates the ability for voice communication)"
                },
                {
                    name: "??kick",
                    value: "??kick <@user> (Allows a user to be kicked from the guild)"
                },
                {
                    name: "??ban",
                    value: "??ban <@user> (Allows a user to be banned from the guild)"
                },
                {
                    name: "??poll",
                    value: "??poll <#poll-channel> <text> (Allows a user to remotely start a poll within the poll channel)"
                },
                {
                    name: "??meme",
                    value: "??meme (Sends a meme to the channel where the command was sent)"
                },
                {
                    name: "??uwu",
                    value: "??uwu (Sends a gif of an uwu to the channel where the command was sent)"
                },
                {
                    name: "??wholesome",
                    value: "??wholesome (Sends a wholesome image to the channel where the command was sent)"
                },
                {
                    name: "??hug",
                    value: "??hug <@user> (Allows a user to send a hug to the mentioned member)"
                },
                {
                    name: "??cursed",
                    value: "??cursed (sends a cursed image to the channel where the command was sent)"
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "© Valhalla"
                }
            }
        });

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 180000)
    }
}

module.exports.config = {
    name: "help",
    description: "sends the commands to the guild",
    usage: "??help",
    accessableby: "Members",
    aliases: ["commands"]
}