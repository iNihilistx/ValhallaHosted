const usedCommand = new Set();
const randomPuppy = require('random-puppy');
const Discord = require('discord.js')

module.exports = {
    name: "cursed",
    description: "Bans a member from the server!",
    usage: "<member> [reason]",
    async execute (message, args) {

        const subReddits = ["hmmm", "cursedimages", "imsorryjon", "cursedimages", "blursedimages", "hmmm", "FunnyCursedImages", "mildlycursedimages", "crappyoffbrands", "onejob"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        if (usedCommand.has(message.author.id)) { // << this means that if the command has been used it'll display a message saying that you're unable to use the command
            message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
    
            // the else is where the code is then written to then run the command
    
            const embed = new Discord.MessageEmbed()
                .setColor('#00c09a')
                .setImage(img)
                .setTimestamp()
                .setFooter('Sunny', 'https://i.imgur.com/I7mrlPC.png')
    
            message.channel.send(embed);
    
            usedCommand.add(message.author.id); // this will then delete the message after 15 seconds
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000); // this is set within Miliseconds
        }
    }
}