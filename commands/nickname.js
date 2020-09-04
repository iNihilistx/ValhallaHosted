const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "setnick")) {
        let nick = message.content.slice((prefix + "setnick").length)
        if (!nick) return message.channel.send("please enter a nickname  to add to all members").then(r => r.delete(5000))

        message.guild.members.forEach(r => r.setNickname(nick + r.user.username))

        message.channel.send("changing nicknames");
    }

}

module.exports.config = {
    name: "nickname",
    description: "sets nickname",
    usage: "-nickname",
    accessableby: "Members",
    aliases: [""]
}