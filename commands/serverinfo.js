const usedCommand = new Set();
const Discord = require('discord.js')

module.exports = {
    name: "serverinfo",
    description: "Shows information regarding the server",
    usage: "=server",
    async execute (message, args) {
        if (usedCommand.has(message.author.id)) {
            message.reply('You are currently in a cooldown. Wait 10 seconds before trying this command again...').then(m => m.delete({ timeout: 2000 }))
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
                .setImage(message.guild.iconURL())
                .setTimestamp()
                .setFooter('Sunny', 'https://i.imgur.com/I7mrlPC.png')
    
            message.channel.send(serverinfoEmbed);
        }
    
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000);
    }
}