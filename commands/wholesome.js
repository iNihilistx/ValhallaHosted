const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "wholesome",
    description: "removes a member from the server",
    usage: "<member> {reason}",
    async execute (message, args) {
        const subReddits = ["eyebleach", "wholesomememes", "babycorgis", "catloaf", "unstirredpaint"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        if (usedCommand.has(message.author.id)) {
            message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
    
            const embed = new Discord.MessageEmbed()
                .setColor('#00c09a')
                .setImage(img)
                .setTimestamp()
                .setFooter('Valhalla', 'https://i.imgur.com/PJfayce.jpg')
    
            message.channel.send(embed);
    
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000);
    
        }
    }
}