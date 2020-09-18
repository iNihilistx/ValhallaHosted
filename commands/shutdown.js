const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "736834245498241093") return message.channel.send("You are the bot owner!")

    try {
        await message.channel.send("Valhallas connection has been terminated...")
        process.exit()
    } catch (e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}

module.exports.config = {
    name: "shutdown",
    description: "shuts down the bot",
    usage: "??shutdown",
    accessableby: "BOT OWNER",
    aliases: ["TerminateConnection"]
}