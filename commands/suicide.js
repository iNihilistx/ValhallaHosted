const usedCommand = new Set();
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "kms",
    description: "allows one to commit die",
    async execute(message, args) {
        const images = ["https://i.imgur.com/iEa1rEP.gif", "https://i.imgur.com/L0Xi8Vh.gif", "https://i.imgur.com/4iv6XIn.gif", "https://i.imgur.com/7cduBMv.gif", "https://i.imgur.com/qv3ZDYb.gif", "https://i.imgur.com/aZbSc1x.gif", "https://i.imgur.com/NuntcWq.gif"];
        const image = images[Math.floor(Math.random() * images.length)];

        if(usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown").then(m => m.delete({timeout: 2000}))
            message.delete()
            return;
        }

        const kmsEmbed = new Discord.MessageEmbed()
        .setColor('#00c09a')
        .setTitle(`${message.member.user.tag} chose the easy way out!`)
        .setImage(image)
        .setTimestamp()
        .setFooter("Valhalla", 'https://i.imgur.com/PJfayce.jpg')

        message.channel.send(kmsEmbed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }
}