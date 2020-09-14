const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply('This command is currently in cooldown')
    } else {
        message.reply('cooldown is off')

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);

        }, 5000);
    }
}