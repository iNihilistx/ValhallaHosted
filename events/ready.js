const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("-help | Nairobi", { type: "PLAYING", url: "https://github.com/Naiirobii" })
}