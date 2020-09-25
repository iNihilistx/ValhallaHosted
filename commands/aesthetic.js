const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["blackandwhite", "heavymind", "earthporn"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {

        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/${random}`)
            .setTimestamp()
            .setFooter('Valhalla', 'hhttps://i.imgur.com/6jJ425v.png')

        message.channel.send(embed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000);
    }
}

module.exports.config = {
    name: "aesthetic",
    description: "",
    usage: "??aesthetic",
    accessableby: "Members",
    aliases: []
}