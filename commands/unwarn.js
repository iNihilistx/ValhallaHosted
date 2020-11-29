const warnModel = require('../models/warn')
const { execute } = require('./kick')

module.exports = {
    name: 'unwarn',
    description: 'unwarn a member within the server!',
    usage: '<member> <warning id> [reason]',
    async execute(message, args) {
        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.reply("You do not have permissions to use the unwarn command")
        }
        else if (!mentionedMember) {
            return message.reply("You need to mention a user you want to unwarn!")
        }

        const mentionedPosition = mentionedMember.roles.highest.position
        const memberPosition = message.member.roles.highest.position

        if (memberPosition <= mentionedPosition) {
            return message.channel.send("You are unable to warn members who have the same/higher permissions!")
        }

        const reason = args.slice(2).join(' ')

        const warnDoc = await warnModel.findOne({
            guildID: message.guild.id,
            memberID: mentionedMember.id,
        }).catch(err => console.log(err))

        if (!warnDoc || !warnDoc.warnings.length) {
            return message.channel.send("This member currently has no warnings!")
        }

        const warningID = parseInt(args[1])

        if (warningID <= 0 || warningID > warnDoc.warnings.length) {
            return message.reply("Invalid warning ID")
        }

        warnDoc.warnings.splice(warningID - 1, warningID !== 1 ? warningID - 1 : 1)

        await warnDoc.save().catch(err => console.log(err))

        message.channel.send(`Unwarned ${mentionedMember} ${reason ? `for **${reason}**` : ''}`)
    }
}
