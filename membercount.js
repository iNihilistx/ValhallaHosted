module.exports = (client) => {
    const channelID = '750460299362041888'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelID)
        channel.setName(`Members: ${guild.memberCount.toLocaclString()}`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('737386427637170239')
    updateMembers(guild)
}