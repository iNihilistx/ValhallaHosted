const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "bonk",
    description: "removes a member from the server",
    usage: "<member> {reason}",
    async execute (message, args) {
        const images = ["https://i.imgur.com/iUEz5fS.gif"];
        const image = images[Math.floor(Math.random() * images.length)];
    
        if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            let member = message.mentions.members.first();
            if (member) {
                try {
                    const hugEmbed = new Discord.MessageEmbed()
                        .setColor('#FFA500')
                        .setURL('https://i.imgur.com/G5bui5n.png')
                        .setImage(image)
                        .setTimestamp()
                        .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')
    
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