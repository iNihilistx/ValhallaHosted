module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['DEAFEN_MEMBERS'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if (member.hasPermission(['DEAFEN_MEMBERS', 'MUTE_MEMBERS']) && !message.member.hasPermission('MODERATOR')) return;

    let deafenedRole = message.guild.roles.cache.get()
}