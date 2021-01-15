const Discord = require('discord.js');
const moment = require('moment');
const usedCommand = new Set();

module.exports = {
    name: "avatar",
    description: "shows avatar of users!",
    usage: "<member>",
    async execute (message, args) {
        if(usedCommand.has(message.author.id)){
            message.reply("You are currently in a cooldown...").then(m => m.delete({timeout: 2000}))
            message.delete()
            return;
        } else {
            let userArray = message.content.split("");
            let userArgs = userArray.slice(1);
            let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;


            const avatarEmbed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag)
            .setImage(member.user.displayAvatarURL({dynamic: true, size: 256}))
            .setTimestamp()
            .setFooter("Valhalla", 'https://i.imgur.com/G5bui5n.png')

            message.channel.send(avatarEmbed);
        }

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 2000);
    }
}