const Discord = require("discord.js")
const botconfig = require("../config.json")

module.exports = bot => {
    console.log(`${bot.user.username} is now online`)

    let statuses = [
        `With ${bot.guilds.cache.size} Servers!`,
        "=help",
        "Being Developed",
        "What is my purpose?",
        "https://discord.gg/c2THnA9"
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "PLAYING" });
    }, 5000)
}