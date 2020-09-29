const usedCommand = new Set();
const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "736834245498241093") {
        message.reply("You lack the permissions needed for this command!").then(m => m.delete({ timeout: 6000 }))
        message.delete()
        return;
    } else {

        try {
            await message.channel.send("Valhallas connection has been terminated...")
            process.exit()
        } catch (e) {
            message.channel.send(`ERROR: ${e.message}`)
        }
    }

    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 6000);

}

module.exports.config = {
    name: "shutdown",
    description: "shuts down the bot",
    usage: "??shutdown",
    accessableby: "BOT OWNER",
    aliases: ["botstop"]
}