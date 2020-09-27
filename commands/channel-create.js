module.exports.run = async (message, args) => {
    guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
        .then(console.log)
        .catch(console.error);

    // Create a new channel with permission overwrites
    guild.channels.create('new-voice', {
        type: 'voice',
        permissionOverwrites: [
            {
                id: message.author.id,
                deny: ['VIEW_CHANNEL'],
            },
        ],
    })
}

module.exports.config = {
    name: "createchannel",
    usage: "cchannel",
    description: "makes channel",
    aliases: []
}