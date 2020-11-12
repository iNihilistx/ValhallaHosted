const Discord = require('discord.js');
const Hangman = require('hangcord');

module.exports.run = async (bot, message, args) => {
    const hangman = new HangmanGame({
        title: 'Hangman',
        color: 'RANDOM', 
        timestamp: true, 
        gameOverTitle: 'Game Over', 
        words: ['word1', 'word2'] 
      });

    hangman.newGame(message);
}

module.exports.config = {
    name: "hangman",
    usage: "??hangman",
    aliases: []
}