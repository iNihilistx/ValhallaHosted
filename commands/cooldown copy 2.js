
const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmeme", "gamingmemes", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    if (usedCommand.has(message.author.id)) {
        message.reply('You cannot use the command beacuse of the cooldown.')
    } else {

        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/${random}`)
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);

    }

    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}

module.exports.config = {
    name: "cooldown",
    description: "a Simple test of the Cooldown Command.",
    usage: "??cooldown",
    accessableby: "Members",
    aliases: []
}