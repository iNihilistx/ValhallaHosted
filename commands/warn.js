const warnModel = require('../models/warn')
const { execute } = require('./kick')

module.exports = {
    name: 'warn',
    description: 'warn a member in the server',
    usage: '<member> [reason]',
    async execute(message, args) {
        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.reply("You do not have permission to warn other members")
        }
        else if (!mentionedMember) {
            return message.reply("You need to mention a member in order to warn them!")
        }

        const mentionedPosition = mentionedMember.roles.highest.position
        const memberPosition = message.member.roles.highest.position

        if (memberPosition <= mentionedPosition) {
            return message.reply("You're unable to warn members with higher roles than you")
    }

    const reason = args.slice(1).join(' ') || 'Not Specified'

    let warnDoc = await warnModel.findOne({
        guildID: message.guild.id,
        memberID: mentionedMember.id,
    }). catch(err => console.log(err))

    if (!warnDoc) {
            warnDoc = new warnModel({
                guildID: message.guild.id,
                memberID: mentionedMember.id,
                warnings: [reason],
                moderator: [message.member.id],
                date: [date.now()],
    })

        await warnDoc.save().catch(err => console.log(err))
        }
        else {
            if (warnDoc.warnings.length >= 3) {
                return message.reply("This member has already reached 3 warnings")
            }

            warnDoc.warnings.push(reason)
            warnDoc.moderator.push(message.member.id)
            warnDoc.date.push(Date.now())

            await warnDoc.save().catch(err => console.log(err))
        }

        message.channel.send(`Warned ${mentionedMember} for reason: **${reason}**`)
    }
}