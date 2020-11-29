const warnModel = require('../models/warn')
const { execute } = require('./kick')

module.exports = {
    name: 'warnings',
    description: 'view the warnings of a member',
    usage: '[member]',
    async execute(message, args) {
        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])
        || message.member

        const warnDoc = await warnModel.findOne({
            guildID: message.guild.id,
            memberID: mentionedMember.id,
        }).catch(err => console.log(err))

        if (!warnDoc || !warnDoc.warnings.length) {
            return message.channel.send(`${mentionedMember} currently has 0 warnings!`)
        }

        const data = []

        for (let i = 0; warnDoc.warnings.length > i; i++) {
            data.push(`**Warning ID:** ${i + 1}`)
            data.push(`**Reason For Warn:** ${warnDoc.warnings[i]}`)
            data.push(`**Warned By:** ${await message.client.users.fetch(warnDoc.moderator[i]).catch(() => 'Deleted User')}`)
            data.push(`**Date Of Warn:** ${new Date(warnDoc.date[i]).toLocaleDateString()}\n`)
        }

        const embed = {
            color: 'ORANGE',
            thumbnail: {
                url: mentionedMember.user.displayAvatarURL({ dynamic: true }),
            },
            description: data.join('\n'),
        }

        message.channel.send({ embed: embed })
    }
}