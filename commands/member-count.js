module.exports.run = async (bot, message, args) => {
    const channelId = '754931819064852510'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = bot.guilds.cache.get('737386427637170239')
    updateMembers(guild)
}

module.exports.config = {
    name: "membercount",
    usage: "",
    description: "displays membercount",
    aliases: []
}