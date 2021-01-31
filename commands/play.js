const Discord = require('discord.js');
const ytdl = require('ytdl-core')

module.exports = {
    name: "play",
    usgae: "=play",
    description: "",
    async execute(message, args) {
        const voiceChannel = message.member.voice.voiceChanne
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to play music!")
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("You do not have permissions to use the play command!")
        if(!permissions.has('SPEAK')) return message.channel.send("You do not have permissions to speak!")

        try {
            var connection = await voiceChannel.join()
        } catch(error){
            console.log(`There was an error whilst connecting to the voice channel ${error}`)
            return message.channel.send("There was an error connecting to the voice channel!")
        }

        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish', () => {
            voiceChannel.leave()
        })
        .on('error', error => {
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)
    } 
}