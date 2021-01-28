const usedCommand = new Set();
const randomPuppy = require("random-puppy")
const Discord = require("discord.js")

module.exports = {
    name: "kill",
    description: "kills a user",
    async execute (message, args){
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let userArray = message.content.split("");
        let userArgs = userArray.slice(1);
        var deathnotes = ["was killed with kindness, or an axe... I forget which", "took a bullet point black to the face", "**accidentally** fell down the stairs"];
        var deathnote = Math.floor(Math.random() * deathnotes.length);

        if(usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({timeout: 2000}))
            message.delete()
            return;
        }

         else if(!mentionedMember) {
            return message.reply("You need to mention a user in order to use the kill command!").then(m => m.delete({timeout:2000}))
            message.delete()
        } else {
            message.channel.send(`${mentionedMember}, ${deathnotes[deathnote]}`);

            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000)
        }
    }
}