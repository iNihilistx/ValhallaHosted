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
            return message.reply("You do not have permission to use the warn command!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        else if (!mentionedMember) {
            return message.reply("You need to mention a member in order to warn them!")
        }

        const mentionedPosition = mentionedMember.roles.highest.position
        const memberPosition = message.member.roles.highest.position

        if (memberPosition <= mentionedPosition) {
            return message.reply("You are unable to warn members who have the same/higher permissions!")
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
                date: [Date.now()],
    })

        await warnDoc.save().catch(err => console.log(err))
        }
        else {
            if (warnDoc.warnings.length >= 4) {
                const reason = args.slice(1).join('')
                try {
                    await mentionedMember.kick([reason])
                    message.channel.send(`${mentionedMember}has reached their 3rd warning, and has been kicked!`)
                }
                catch(error){
                    message.channel.send("There has been an error when removing the member for breaching the rules!")
                }
            }

            warnDoc.warnings.push(reason)
            warnDoc.moderator.push(message.member.id)
            warnDoc.date.push(Date.now())

            await warnDoc.save().catch(err => console.log(err))
        }

        message.channel.send(`Warned ${mentionedMember} for reason: **${reason}**`)
    }
}