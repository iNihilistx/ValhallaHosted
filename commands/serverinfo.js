const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const serverinfoEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Server Information: ')
        .setURL('https://i.imgur.com/G5bui5n.png')
        .setAuthor('Nairobi', 'https://i.imgur.com/G5bui5n.png')
        .setDescription(`Server information`)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        .addFields(
            { name: "Server Name: ", value: `${message.guild.name}` },
            { name: "Current Members: ", value: `${message.guild.memberCount}` },
            { name: 'Server Owner: ', value: `${message.guild.owner}`, inline: true },
            { name: 'Your Username: ', value: `${message.member.user.tag}`, inline: true }
        )
        .addField('Creator: ', 'Nairobi', true)
        .addField('Creation Date: ', `${message.channel.guild.createdAt.toUTCstring().substr(0, 16)} (${checkDays}(message.channel.guild.createdAt))`, true)
        .setImage(message.guild.iconURL())
        .setTimestamp()
        .setFooter('Valhalla, created by: Nairobi', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(serverinfoEmbed);
}

module.exports.config = {
    name: "serverinfo",
    description: "shows server information",
    usage: "-serverinfo",
    accessableby: "Members",
    aliases: ["sinfo"]
}