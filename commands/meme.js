const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const usedCommand = new Set()

module.exports.run = async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
        message.reply('This command is currently in cooldown')
    } else {

        const subReddits = ["meme", "me_irl", "dankmeme", "gamingmemes", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/${random}`)
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);

        usedCommand.add(message.author.id);
        setTimeout(() => {

        }, 3000);
    }
}

module.exports.config - {
    name: "meme",
    usage: "??meme",
    description: "Sends a meme",
    accessableby: "Members",
    aliases: []
}