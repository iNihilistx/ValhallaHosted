const Discord = require('discord.js')
const bot = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(bot);
bot.player = player;

module.exports.run = async (bot, message, args) => {
    let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
    message.channel.send(`Currently playing ${track.name}! Requested by: ${track.requestedBy}`);
}

module.exports.config = {
    name: "play",
    usage: "??play",
    description: "Allows the bot to join the call and play music"
}