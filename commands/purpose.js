const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(Args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join("") || x.user.username === userArgs[(0)]) || message.member;

    const mypurposeEmbed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('What is my purpose?')
        .setURL('https://i.imgur.com/sdNIc8t.gif')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setDescription(`You pass butter`)
        .setThumbnail('https://i.imgur.com/G5bui5n.png')
        .setTimestamp()
        .setFooter('vallhalla', 'https://i.imgur.com/G5bui5n.png')

    message.channel.send(mypurposeEmbed);
}

module.exports.config = {
    name: "Purpose",
    setDescription: "bot gif",
    usage: "=purpose",
    accessableby: "Members",
    aliases: []

}