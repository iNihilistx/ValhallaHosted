const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "slap",
    description: "Slaps a user",
    usage: "<member> {reason}",
    async execute (message, args) {
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let userArray = message.content.split("");
        let userArgs = userArray.slice(1);
        const images = ["https://i.imgur.com/kQEi7ZG.gif", "https://i.imgur.com/2IkumDO.gif", "https://i.imgur.com/5c6uVv0.gif", "https://i.imgur.com/WKVMfG3.gif", "https://i.imgur.com/pGtMTNK.gif", "https://i.imgur.com/I4vjKtA.gif"];
        const image = images[Math.floor(Math.random() * images.length)];
        
        if(!mentionedMember){
            return message.reply("You need to mention a user in order to use the slap command!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        
        else if(usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown... Chill out with the slaps Karate Kid").then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            let userArray = message.content.split("");
            let userArgs = userArray.slice(1);
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


            if (member) {
                try {
                    const hugEmbed = new Discord.MessageEmbed()
                        .setColor('#00c09a')
                        .setTitle(`${message.author.tag} came out of the gate swinging`)
                        .setURL('https://i.imgur.com/G5bui5n.png')
                        .setImage(image)
                        .setTimestamp()
                        .setFooter("Valhalla", 'https://i.imgur.com/PJfayce.jpg')
    
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