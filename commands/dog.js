const { MessageEmbed, Message } = requrie("discord.js");
const fetch = require('node-fetch');
const { orange } = require('../../ colors.json');

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating Cuteness...")

    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json()), then(body => {
            if (!body) return message.reply(" Unable to load image!")

            let embed = new MessageEmbed()
                .setColor(orange)
                .setAuthor(`${bot.user.username}: Doggos!`, message.guild.iconURL)
                .setIMage(body.file)
                .setTimestamp()
                .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(embed)
        })
}

module.exports.confid = {
    name: "dog",
    description: "sends pictures of dogs",
    usage: "-dog",
    category: "images",
    accessableby: "Members",
    aliases: ["doggos"]
}