const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "uwu",
    description: "Sends an uwu",
    usage: "<member> {reason}",
    async execute (message, args) {
        const images = ["https://i.imgur.com/1dDkQNL.gif", "https://i.imgur.com/rjTA8fC.gif", "https://i.imgur.com/Pg4Kp2q.gif", "https://i.imgur.com/NpYpXgI.gif", "https://i.imgur.com/jJ2N5Zu.gif", "https://i.imgur.com/K6bWrmL.gif"];
        const image = images[Math.floor(Math.random() * images.length)];
    
        if (usedCommand.has(message.author.id)) {
            message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            const uwuEmbed = new Discord.MessageEmbed()
                .setColor("#FFA500")
                .setTitle('UWU')
                .setURL('https://i.imgur.com/G5bui5n.png')
                .setImage(image)
                .setTimestamp()
                .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')
    
    
    
            message.channel.send(uwuEmbed);
    
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000);
        }
    }
}