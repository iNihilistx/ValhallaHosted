const Discord = require("discord.js")
const botconfig = require("../config.json")

module.exports = bot => {
    console.log(`${bot.user.username} is now online`)

    let statuses = [
        `${guilds.cache.size} Servers!`,
        "-help",
        `over ${bot.guilds.memberCount} users!`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "WATCHING" });
    }, 5000)
}