const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "hug",
    description: "Sends a hug",
    usage: "<member> {reason}",
    async execute (message, args) {
        const images = ["https://i.imgur.com/Nudh7mq.gif", "https://i.imgur.com/LgK8jm6.gif", "https://i.imgur.com/XIXkCDU.gif", "https://i.imgur.com/84PPgBA.gif", "https://i.imgur.com/rfMh1B0.gif"];
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
                        .setColor('#00c09a')
                        .setTitle(`Sending Warm Cuddles`)
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