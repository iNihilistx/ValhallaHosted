const Discord = require("discord.js")
const botconfig = require("../config.json")

module.exports = bot => {
    console.log(`${bot.user.username} is now online`)

    let statuses = [
        "??help",
        `watching ${bot.guilds.cache.size}`,
        "What is my purpose?",
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "PLAYING" });
    }, 5000)
}