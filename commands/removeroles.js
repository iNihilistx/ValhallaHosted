const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first()
    if (!user) return message.channel.send("Unable to find user")

    let role = message.mentions.roles.first()
    if (!role) return message.channel.send("Role is missing")

    message.channel.send(`${user} role has been removed (${role})`)
    user.roles.remove(role)
}

module.exports.help = {
    name: "removerole",
    description: "removes roles",
    usage: "-removeole",
    accessableby: "moderator",
    aliases: ["Rrole"]
}