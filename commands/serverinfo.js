const usedCommand = new Set();
const Discord = require('discord.js')

module.exports = {
    name: "serverinfo",
    description: "Shows information regarding the server",
    usage: "=server",
    async execute (message, args) {
        if (usedCommand.has(message.author.id)) {
            message.reply('You are currently in a cooldown...').then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            function duration(ms) {
                const sec = Math.floor((ms / 1000) % 60).toString()
                const min = Math.floor((ms / (1000 * 60)) % 60).toString()
                const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
                const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
                return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds. `
            }
            let userArray = message.content.split(" ");
            let userArgs = userArray.slice(1);
            let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join("") || x.user.username === userArgs[0]) || message.member;
    
            const serverinfoEmbed = new Discord.MessageEmbed()
                .setColor('#00c09a')
                .setTitle('Server Information:')
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
                .addFields(
                    { name: "Server Name: ", value: `${message.guild.name}`, inline: true },
                    { name: "Server ID: ", value: `${message.guild.id}`, inline: true},
                    { name: 'Server Owner: ', value: `${message.guild.owner}`, inline: true },
                    { name: "Current Members: ", value: `${message.guild.memberCount}`, inline: true },
                    { name: "Channels: ", value: `${message.guild.channels.cache.size}`, inline: true},
                    { name: "Roles: ", value: `${message.guild.roles.cache.size}`, inline: true},
                    { name: 'Server Created: ', value: `${message.guild.createdAt.toLocaleString()}`, inline: true},
                    { name: 'Verification Level: ', value: `${message.guild.verificationLevel}`, inline: true },
                    { name: 'AFK Timeout: ', value: `${message.guild.afkTimeout / 60} minutes`, inline: true },
                )
                .addField("Server Region: ", message.guild.region, true)
                .setImage(message.guild.iconURL())
                .setTimestamp()
                .setFooter('Valhalla', 'https://i.imgur.com/PJfayce.jpg')
    
            message.channel.send(serverinfoEmbed);
        }
    
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000);
    }
}