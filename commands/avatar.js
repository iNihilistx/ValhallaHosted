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


            const avatarEmbed = new Discord.MessageEmbed()
            .setTitle("Avatar Showcase:")
            .setAuthor(member.user.tag)
            .setImage(member.user.displayAvatarURL({format: 'png', size: 512}))
            .setTimestamp()
            .setFooter("Sunny", 'https://i.imgur.com/I7mrlPC.png')

            message.channel.send(avatarEmbed);
        }

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 2000);
    }
}