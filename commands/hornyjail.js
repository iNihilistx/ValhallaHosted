const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "bonk",
    description: "Bonks a user",
    usage: "<member> {reason}",
    async execute (message, args) {
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const images = ["https://i.imgur.com/iUEz5fS.gif","https://i.imgur.com/EjgVxtC.gif"];
        const image = images[Math.floor(Math.random() * images.length)];
    
        if(!mentionedMember){
            message.reply("You need to mention a user in order to bonk them!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }

        else if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            let member = message.mentions.members.first();
            if (member) {
                try {
                    const hugEmbed = new Discord.MessageEmbed()
                        .setColor('#00c09a')
                        .setURL('https://i.imgur.com/G5bui5n.png')
                        .setImage(image)
                        .setTimestamp()
                        .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')
    
                    message.channel.send(hugEmbed);
    
                    usedCommand.add(message.author.id);
                    setTimeout(() => {
                        usedCommand.delete(message.author.id);
                    }, 5000)
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    }
}