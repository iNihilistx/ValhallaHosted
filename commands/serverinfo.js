const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const ServerEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Server Statistics')
        .setURL('https://discord.js.org/')
        .setAuthor('Nairobi')
        .setDescription(`Server Statistics for ${message.guild.name}`)
        .setThumbnail('https:/i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Server Name: ', value: `${message.guild.name}` },
            { name: 'Member Count: ', value: `${message.guild.memberCount}` }
        )



}
module.exports.config = {
    name: "serverinfo",
    description: "shows server information",
    usage: "-serverinfo",
    accessableby: "Members",
    aliases: []
}