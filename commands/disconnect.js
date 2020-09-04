const { MessageEmbed, Message } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("You lack the permissions needed for this command!")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!kickMember) return message.channel.send("Pease provide a user to kick!")

    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No reason given!"

    if (!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("I don't have the needed permissions for this")


    kickMember.send(`Hello, you have been kicked from ${message.guild.name} for: ${reason}`).then(() =>
        kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`).then(m => m.delete(5000))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`).then(m => m.delete(5000))

    let removed = new MessageEmbed()
        .setColor("#FFA500")
        .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
        .addField("Mute: ", kickMember.user.username)
        .addField("Moderator: ", message.author.username)
        .addField("Reason: ", reason)
        .addField("Date: ", message.createdAt.toLocalString())

    message.channel.send(removed)
}

module.exports.config = {
    name: "kick",
    usage: "-remove",
    description: "removes user from guild",
    accessableby: "KICK_MEMBERS",
    aliases: []
}