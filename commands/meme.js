const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmeme", "memes", "raimimemes", "sbubby"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTimestamp()
            .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000);
    }
}

module.exports.config = {
    name: "meme",
    description: "sends memes.",
    usage: "??meme",
    accessableby: "Members",
    aliases: []
}