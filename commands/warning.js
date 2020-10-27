const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let perms = message.member.hasPermission("MANAGE_MEMBERS")
    if(!perms) return message.reply("You lack the permissions needed!")

    let user = message.mentions.members.first()
    if(!user) return message.reply("You need to mention a user!")

    let reason = args.slice(0).join(' ')
    if(!reason) reason = "No reason has been provided"

    const warningEmbed = new Discord.MessageEmbed()
    .setTitle("Warned User | " + user.user.tag)
    .addField("User Warned", `${user}`)
    .addField("Warned By: ", `${message.author}`)
    .addField("Reason: ", reason)

    try {
        user.send(`${user} You have been warned by: ${message.author} in the server ${message.guild.name} with the reason of ${reason}`)
    } catch (err) {
        console.log(err)
    }
    message.channel.send(`${user} has been warned for ${reason}`)

    message.channel.send(warningEmbed)
}

module.exports.config = {
    name: "warn",
    usage: "??warn",
    aliases: []
}