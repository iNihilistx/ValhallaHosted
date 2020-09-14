module.exports = (bot) => {
    const channelId = '732883157103149067'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('464316540490088448')
    updateMembers(guild)
}