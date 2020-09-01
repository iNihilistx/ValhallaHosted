const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message) => {

    let user = message.mentions.members.first()
    if (!member) return message.channel.send("Unable to find member")

    let role = message.mentions.roles.first()
    if (!role) return message.channel.send("Role is missing")

    message.channel.send(`${member} role has been removed (${role})`)
    user.roles.add(role)
}

module.exports.config = {
    name: "addroles",
    description: "",
    usage: "-addrole",
    accessableby: "moderators",
    aliases: []
}