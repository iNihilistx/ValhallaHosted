const usedCommand = new Set();
const Discord = require("discord.js")
 
module.exports = {
    name: "rick",
    description: "Get RickRolled",
    usage: "<member> [reason]",
    async execute (message, args) {
        if(usedCommand.has(message.author.id)){
            message.reply("You are currently in a cooldown....").then(m.delete({timeout: 2000}))
            message.delete()
            return;
        } else {
            const voiceChannel = message.member.voice.channel;
            if(!voiceChannel) {
                return message.reply("You need to be in a voice channel");
            }
            voiceChannel.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                dispatcher = connection.playStream(stream, streamOptions);
            })
            .catch(console.log)
        }
    }
}