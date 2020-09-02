const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const serverinfoEmbed = new Discord.MessageEmbed()
    function duration(ms)
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')}seconds.`

        .setColor('#FFA500')
        .setTitle('Server Information: ')
        .setURL('https://i.imgur.com/G5bui5n.png')
        .setAuthor('Valhalla', 'https://i.imgur.com/G5bui5n.png')
        .setDescription(`Server information`)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        .addFields(
            { name: "Server Name: ", value: `${message.guild.name} ` },
            { name: "Current Members: ", value: `${message.guild.memberCount} ` },
            { name: 'Requested By: ', value: `${message.member.user.tag} `, inline: true },
            { name: 'Server Owner: ', value: `${message.guild.owner} `, inline: true }
        )
        .addField("Server Region: ", message.guild.region, true)
        .addField("Bot Uptime: ", message.channel.send`${duration(bot.uptime)}`, true)
        .setImage(message.guild.iconURL())
        .setTimestamp()
        .setFooter('Valhalla, created by: Nairobi', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(serverinfoEmbed);
}

module.exports.config = {
    name: "server",
    description: "shows server information",
    usage: "-server",
    accessableby: "Members",
    aliases: [""]
}