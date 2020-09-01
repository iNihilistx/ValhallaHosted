module.exports = (client) => {
    const channelId = '750460299362041888'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('737386427637170239')
    updateMembers(guild)
}