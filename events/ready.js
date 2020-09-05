const Discord = require("discord.js")
const botconfig = require("../config.json")

let userArray = message.content.split(" ");
let userArgs = userArray.slice(1);
let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join("") || x.user.username === userArgs[0]) || message.member;

module.exports = bot => {
    console.log(`${bot.user.username}is now online`)

    let statuses = [
        `${bot.guilds.size}Servers!`,
        "-help",
        `over ${message.guild.memberCount} users!`
    ]
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "WATCHING" });

    }, 5000)

}