const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const serverinfoEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Server Information')
        .setURL('https://i.imgur.com/G5bui5n.png')
        .setAuthor('Nairobi', 'https://i.imgur.com/GlJ2Ucv.jpg')
        .setDescription(`The statics for this server`)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        .addFields(
            { name: "Server Name: ", value: `${message.guild.name}` },
            { name: "Current Members: ", value: `${message.guild.memberCount}` },
            { name: 'Server Owner', value: '285691402405281792', inline: true },
            { name: 'Your Username', value: `${message.author.username}`, inline: true }
        )
        .addField('Valhalla', true)
        .setImage('https://i.imgur.com/G5bui5n.png')
        .setTimestamp()
        .setFooter('https://i.imgur.com/G5bui5n.png')

    message.channel.send(serverinfoEmbed);
}

module.exports.config = {
    name: "serverinfo",
    description: "shows server information",
    usage: "-serverinfo",
    accessableby: "Members",
    aliases: ["sinfo"]
}