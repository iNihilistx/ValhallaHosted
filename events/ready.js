const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("-help | twitch.tv/iflasheh", { type: "PLAYING", url: "https://www.twitch.tv/iflasheh" })
}