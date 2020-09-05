
const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join("") || x.user.username === userArgs[0]) || message.member;

    const purposeEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Server Information: ')
        .setURL('https://i.imgur.com/sdNIc8t.gif')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setDescription(`All the information for this guild`)
        .setThumbnail('https://i.imgur.com/sdNIc8t.gif')
        .addFields(
            { name: "Server Name: ", value: `${message.guild.name}` },
            { name: "Current Members: ", value: `${message.guild.memberCount}` },
            { name: 'Server Owner: ', value: `${message.guild.owner}`, inline: true },
            { name: 'Verification Level: ', value: `${message.guild.verificationLevel}`, inline: true }
        )
        .addField("Server Region: ", message.guild.region, true)
        .setImage(message.guild.iconURL())
        .setTimestamp()
        .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(purposeEmbed);
}

module.exports.config = {
    name: "purpose",
    description: "shows server information",
    usage: "=purpose",
    accessableby: "Members",
    aliases: [""]
}