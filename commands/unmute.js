const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['MUTE_MEMBERS'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('MODERATOR')) return;

    let mutedRole = message.guild.roles.cache.get('mute');
    let verifiedRole = message.guild.roles.cache.get('MEMBER ROLE ID (37386427637170239)');
    if (mutedRole) {
        member.roles.remove(mutedRole);
        member.roles.add(verifiedRole);
        message.channel.send("User has been unmuted.");
    }
}

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "=unmute",
    accessableby: "Moderators",
    aliases: []
}