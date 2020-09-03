const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    }
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join("") || x.user.username === userArgs[0]) || message.member;

    const serverinfoEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Server Information: ')
        .setURL('https://i.imgur.com/G5bui5n.png')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setDescription(`All the information for this guild`)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        .addFields(
            { name: "Server Name: ", value: `${message.guild.name}` },
            { name: "Current Members: ", value: `${message.guild.memberCount}` },
            { name: 'Server Owner: ', value: `${message.guild.owner}`, inline: true },
            { name: 'Verification Level: ', value: `${message.guild.verificationLevel}`, inline: true }
        )
        .addField("Server Region: ", message.guild.region, true)
        .addField("Roles: ", message.guild.roles.size, true)
        .addField("Creation Date: ", `${message.channel.guild.createdAt.toUTCString().subsrt(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setImage(message.guild.iconURL())
        .setTimestamp()
        .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(serverinfoEmbed);
}

module.exports.config = {
    name: "server",
    description: "shows server information",
    usage: "-server",
    accessableby: "Members",
    aliases: [""]
}