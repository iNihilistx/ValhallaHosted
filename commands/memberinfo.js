
const Discord = require('discord.js');
const moment = require('moment');
const usedCommand = new Set();

module.exports = {
    name: "memberinfo",
    description: "shows information regarding a user!",
    usage: "<member> {reason}",
    async execute (message, args) {
        if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 2000 }))
            message.delete()
            return;
        } else {
            let userArray = message.content.split(" ");
            let userArgs = userArray.slice(1);
            let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
            if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
            if (member.presence.status === 'online') member.presence.status = 'Online';
            if (member.presence.status === 'idle') member.presence.status = 'Idle';
            if (member.presence.status === 'offline') member.presence.status = 'Offline';
    
            let x = Date.now() - member.createdAt;
            let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
            const joined = Math.floor(y / 86400000);
    
            const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY");
            let status = member.presence.status;
    
            const userEmbed = new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
                .setTimestamp()
                .setColor('#FFA500')
                .setImage(member.user.displayAvatarURL())
                .addField("Member ID", member.id)
                .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
                .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
                .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
                .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')
    
            message.channel.send(userEmbed);
        }
    
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 2000);
    }
}