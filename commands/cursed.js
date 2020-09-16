const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["cursedimages", "blursedimages"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (usedCommand.has(message.author.id)) { // << this means that if the command has been used it'll display a message saying that you're unable to use the command
        message.reply('You are currently in a cooldown. Wait 15 seconds before trying this command again...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {

        // the else is where the code is then written to then run the command

        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/${random}`)
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);

        usedCommand.add(message.author.id); // this will then delete the message after 15 seconds
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000); // this is set within Miliseconds
    }

}

module.exports.config = {
    name: "cursed",
    description: "",
    usage: "??cursed",
    accessableby: "Members",
    aliases: []
}
