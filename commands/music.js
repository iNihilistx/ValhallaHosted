const Discord = require('discord.js')
const bot = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(bot);
bot.player = player;

bot.on("message", async message => {
    let prefix = '!'

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'play') {
        let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently Playing ${track.name}! - Requested by ${track.requestedBy}`);
    }

    if (command === 'stop') {
        let track = await bot.player.stop(message.guild.id);
        message.channel.send(`STOPPED PLAYING`);
    }

    if (command === 'pause') {
        const track = await bot.player.pause(message.guild.id);
        message.channel.send(`${track.name} has been paused!`);
    }

    if (command === 'resume') {
        const track = await bot.player.resume(message.guild.id);
        message.channel.send(`${track.name} has resumed playing!`);
    }
})