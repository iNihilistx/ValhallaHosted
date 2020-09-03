const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.author.id != "736834245498241093") return message.channel.send("You lack the permissions needed for this command!")

    try {
        await message.channel.send("Valhalla is shutting down...")
        process.exit()
    } catch (e) {
        message.channel.send(`ERROR: ${e.message}`)
    }

}
module.exports.config = {
    name: "Kill Connection",
    description: "",
    usage: "-shutdown",
    accessableby: "Nairobi",
    aliases: []
}