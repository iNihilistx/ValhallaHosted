module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['MUTE_MEMBERS'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('MODERATOR')) return;

    let mutedRole = message.guild.roles.cache.get('Muted');
    let verifiedRole = message.guild.roles.cache.get('muted)');
    if (mutedRole) {
        member.roles.add(mutedRole);
        member.roles.remove(verifiedRole);
        message.channel.send("User has been muted.");
    }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "=mute",
    accessableby: "Moderators",
    aliases: []
}