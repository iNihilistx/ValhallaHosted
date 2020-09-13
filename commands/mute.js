const { MessageEmbed } = require("discord.js")
const Botconfig = require('../ config.json')
module.exports.run = async (message, bot, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
            "You lack the needed permissions"
        );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I lack the needed permissions");
    }

    const user = message.mentions.member.first();

    if (!user) {
        return message.channel.send("Can't use this to mute yourself dumbass");
    }

    let reason = args.slice(1).join(" ")

    if (!reason) {
        return message.channel.send("please provide a reason for the mute");

    }

    let muterole = message.guild.cache.find(x => x.name === "mute")

    if (!muterole) {
        return message.channel.send("The server lacks the needed role for this action")
    }

    if (user.roles.cache.has(muterole)) {
        return message.channel.send("User already has the role")
    }

    user.roles.add(muterole)

    await message.channel.send(`You have muted ${message.mentions.users.first().username} for \`${reason}\``)
    user.send(`You have been muted in ${message.guild.name} for \`${reason}\``)
}

module.exports.config = {
    name: "mute",
    usage: "=mute",
    description: "mutes user",
    aliases: []
}