const { MessageEmbed, Message } = require("discord.js")
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating Cuteness...")

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()).then(body => {
            if (!body) return message.reply(" Unable to load image!")

            let dEmbed = new MessageEmbed()
                .setColor('#FFA500')
                .setAuthor(`${bot.user.username}: Doggos!`, message.guild.iconURL)
                .setImage(body.file)
                .setTimestamp()
                .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(dEmbed)
        })
}

module.exports.config = {
    name: "dog",
    description: "sends a picture of a dog",
    usage: "-dog",
    category: "images",
    accessableby: "Members",
    aliases: ["doggos"]
}