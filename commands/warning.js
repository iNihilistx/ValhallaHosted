const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({timeout:6000}))
        message.delete()
        return;
    } else {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ")) || message.member;

        if(member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if(member.presence.status === 'online') member.presence.status = 'Online';
        if(member.presence.status === 'idle') member.presence.status = 'Idle';
        if(member.presence.status === 'offline') member.presence.status = 'Offline';

        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY");
        let status = member.presence.status;
        
        const warningEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('#FFA500')
        .setImage(member.user.displayAvatarURL())
        .addField("**Warned Members ID:**", member.id)
        .addField("**Joined the server on:** ", `${joineddate} \n ${joined} day(s) Ago`)
        .addField("**Action:**", "Warned")
        .setFooter('Valhalla', 'https://i.imgur.com/G6bui5n.png')
        
        message.channel.send(warningEmbed);
    }
}

module.exports.config = {
    name: "warn",
    usage: "??warn",
    accessableby: "Moderators",
    aliases: []
}