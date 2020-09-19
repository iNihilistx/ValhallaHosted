const usedCommand = new Set();
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (usedCommand.has(message.author.id)) {
        message.reply('You are currently in a cooldown. Wait 15 seconds before trying this command again...').then(m => m.delete({ timeout: 5000 }))
        message.delete()
        return;
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle("Valhallas Commands: ")
            .description("My commmads are: ")
            .addField("Server")
            .setTimestamp()
            .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000);
    }
}

module.exports.config = {
    name: "commands",
    description: "sends all the commands",
    usage: "??commands",
    accessableby: "Members",
    aliases: []
}
