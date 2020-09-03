const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
        .setTitle('New Poll!')
        .setDescription(pollDescription)
        .setColor('#FFA500')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')

}
module.exports.config = {
    name: "Poll",
    description: "",
    usage: "-poll",
    accessableby: "Members",
    aliases: []
}