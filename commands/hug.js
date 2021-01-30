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
        let userArray = message.content.split("");
        let userArgs = userArray.slice(1);
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        
        if(!mentionedMember){
            return message.reply("You need to mention a user in order to hug them").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        
         else if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
                    const hugEmbed = new Discord.MessageEmbed()
                        .setColor('#00c09a')
                        .setTitle(`Sending Warm Cuddles`)
                        .setURL('https://i.imgur.com/I7mrlPC.png')
                        .setImage(image)
                        .setTimestamp()
                        .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')
    
                    message.channel.send(hugEmbed);
    
                    usedCommand.add(message.author.id);
                    setTimeout(() => {
                        usedCommand.delete(message.author.id);
                    }, 5000)
                }
                }
             }