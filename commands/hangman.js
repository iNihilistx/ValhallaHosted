const Discord = require('discord.js');
const Hangman = require('hangcord');

module.exports.run = async (bot, message, args) => {
    const hangman = new Hangman({
        title: 'Hangman',
        color: 'ORANGE',
        timestamp: true,
        gameOverTile: 'Game Over'
    });

    hangman.newGame(message);
}

module.exports.config = {
    name: "hangman",
    usage: "??",
    aliases: []
}