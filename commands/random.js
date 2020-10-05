const Discord = require("discord.js")
var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Unsure, try again...",
    "Definitely",
    "Fuck off",

];

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")
    }
    if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.send(":x: " + "| I Wasnt Able To Read That :(");
}

module.exports.config = {
    name: "8ball",
    usage: "??8ball",
    aliases: []
}