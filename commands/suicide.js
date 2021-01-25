const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "kms",
    description: "allows one to commit die",
    async execute(message, args) {
        const images = ["https://i.imgur.com/iEa1rEP.gif", "https://i.imgur.com/L0Xi8Vh.gif", "https://i.imgur.com/4iv6XIn.gif", "https://i.imgur.com/7cduBMv.gif", "https://i.imgur.com/qv3ZDYb.gif", "https://i.imgur.com/aZbSc1x.gif"];
        const image = images[Math.floor(Math.random() * images.length)];

        const kmsEmbed = new Discord.MessageEmbed()
        .setColor('#00c09a')
        .setTitle(`${message.member.user.tag} chose the easy way out!`)
        .setImage(image)
        .setTimestamp()
        .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')

        message.channel.send(kmsEmbed);
    }
}