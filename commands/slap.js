const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "slap",
    description: "removes a member from the server",
    usage: "<member> {reason}",
    async execute (message, args) {
        const images = ["https://i.imgur.com/kQEi7ZG.gif", "https://i.imgur.com/2IkumDO.gif", "https://i.imgur.com/5c6uVv0.gif", "https://i.imgur.com/WKVMfG3.gif", "https://i.imgur.com/pGtMTNK.gif", "https://i.imgur.com/I4vjKtA.gif"];
        const image = images[Math.floor(Math.random() * images.length)];
    
        if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown... Chill out with the slaps Karate Kid").then(m => m.delete({ timeout: 5000 }))
            message.delete()
            return;
        } else {
            let member = message.mentions.members.first();
            if (member) {
                try {
                    const hugEmbed = new Discord.MessageEmbed()
                        .setColor('#FFA500')
                        .setTitle(`Sending your slap first class`)
                        .setURL('https://i.imgur.com/G5bui5n.png')
                        .setImage(image)
                        .setTimestamp()
                        .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')
    
                    message.channel.send(hugEmbed);
    
                    usedCommand.add(message.author.id);
                    setTimeout(() => {
                        usedCommand.delete(message.author.id);
                    }, 15000)
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    }
}