const Discord = require('discord.js');
const botsettings = require('./config.json');
const usedCommand = new Set();

const bot = new Discord.Client({ disableEveryone: true });

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')

    welcomeChannel.send(`${member} has joined the server!`)
})

bot.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "goodbye")
    welcomeChannel.send(` ${member} has left the server!`)
})

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (cmd === '??poll') {
        if (usedCommand.has(message.author.id)) {
            (await message.reply("You are currently in a cooldown. Wait 10 seconds and try again...")).attachments(m => m.delete({ timeout: 5000 }))
        } else {


            let pollChannel = message.mentions.channels.first();
            let pollDescription = args.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
                .setTitle(`🗳️ New Poll For: ${message.mentions.guild} 🗳️`)
                .setDescription(pollDescription)
                .setColor('ORANGE')
            let msgEmbed = await pollChannel.send(embedPoll);
            await msgEmbed.react('✅')
            await msgEmbed.react('❌')
        }

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }
})

require("./util/eventHandler")(bot)

const fs = require("fs");
const { isContext } = require('vm');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ') + 1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)

})

bot.on('message', async message => {
    if (message.author.bot) return
    if (!message.content.startsWith(PREFIX)) return

    const args = message.content.substring(PREFIX.length).split(" ")
    const serverQueue = queue.get(message.guild.id)

    if (message.content.startsWith(`${PREFIX}play`)) {
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play music")
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if (!permissions.has('CONNECT')) return message.channel.send("You don't have permission to connect to the voice channel")
        if (!permissions.has('SPEAK')) return message.channel.send("I don't have the correct permissions to speak in the channel")

        const songInfo = await ytdl.getInfo(args[1])
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        }

        if (!serverQueue) {
            const queueContstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            }

            queue.set(message.guild.id, queueContstruct)

            queueContstruct.songs.push(song)

            try {
                var connection = await voiceChannel.join()
                queueContstruct.connection = connection
                play(message.guild, queueContstruct.songs[0])
            } catch (error) {
                console.log(`There was an error connecting to the voice channel: ${error}`)
                queue.delete(message.guild.id)
                return message.channel.send(`There was an error connecting: ${error}`)
            }
        } else {
            serverQueue.songs.push(song)
            return message.channel.send(`**${song.title}** has been added to the queue`)
        }
        return undefined
    } else if (message.content.startsWith(`${PREFIX}stop`)) {
        if (!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to stop the music")
        if (!serverQueue) return message.channel.send("There is nothing playing")
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        message, channel.send("I have stopped the music")
        return undefined

    } else if (message.content.startsWith(`${PREFIX}skip`)) {
        if (!message.member.voice.channel) return message.channel.send("you need to be in a voice channel")
        if (!serverQueue) return message.channel.send("There is nothing playing")
        serverQueue.connection.dispatcher.end()
        message.channel.send("i have skipped the music")
        return undefined
    }
})
function play(guild, song) {
    const serverQueue = queue.get(guild.id)

    if (!song) {
        serverQueue.voiceChannel.leave()
        queue.delete(guild.id)
        return
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on('finish', () => {
            serverQueue.songs.shift()
            play(guild, serverQueue.songs[0])
        })
        .on('error', error => {
            console.log(error)
        })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)

}



bot.login(process.env.token);