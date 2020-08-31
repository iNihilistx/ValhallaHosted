const { MessageEmbed, Message } = require("discord.js")
const fetch = require('node-fetch');
const { orange } = require('../../colors.json');

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating Cuteness...")

    fetch("http://aws.random.cat/meow")
        .then(res => res.json()).then(body => {
            if (!body) return message.reply(" Unable to load image!")

            let embed = new MessageEmbed()
                .setColor(orange)
                .setAuthor(`${bot.user.username}: Cattos!`, message.guild.iconURL)
                .setImage(body.file)
                .setTimestamp()
                .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(embed)
        })
}

module.exports.config = {
    name: "cat",
    description: "sends a picture of a cat",
    usage: "-cat",
    category: "images",
    accessableby: "Members",
    aliases: ["cutecat"]
}