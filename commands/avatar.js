const Discord = require('discord.js');
const moment = require('moment');
const usedCommand = new Set();

module.exports = {
    name: "avatar",
    description: "shows avatar of users!",
    usage: "<member>",
    async execute (message, args) {
        const mentionedMember = message.mentions.members.first()
        if(!mentionedMember) {
            return message.reply("You need to mention someone to use this command!").then(m => m.delete({timeout: 2000}))
            message.delete();
        } else{
            let userArray = message.content.split("");
            let userArgs = userArray.slice(1);
            let member = message.mentions.members.first();


            const avatarEmbed = new Discord.MessageEmbed()
            .setTitle("Avatar Showcase:")
            .setAuthor(member.user.tag)
            .setImage(member.user.displayAvatarURL({format: 'png', size: 512}))
            .setTimestamp()
            .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')

            message.channel.send(avatarEmbed);
        }
    }
}