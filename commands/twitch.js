
module.exports.run = async (bot, message, args) => {
    return message.channel.send("https://www.twitch.tv/iflasheh")
}

module.exports.config = {
    name: "twitch",
    description: "",
    usage: "-twitch",
    accessableby: "Members",
    aliases: []
}