const muteModel = require('../models/mute')
const { execute } = require('./kick')

module.exports = {
    name: "unmute",
    usage: "<member> {reason}",
    async execute(message, args) {
        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

        const muteRole = message.guild.roles.cache.find(r => r.name == 'Muted')

        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.reply("You don't have permission to use the unmute command!")
        }

        else if(!mentionedMember) {
            return message.reply("You need to mention a member in order to unmute them!")
        }
        
        else if (!muteRole) {
            return message.reply("This servers mute role isn't set up, once a member is muted the role will be created!")
        }

        const  muteDoc = await muteModel.findOne({
            guildID: message.guild.id,
            memberID: mentionedMember.id,
        })

        if (!muteDoc) {
            return message.reply("This member currently is not muted!")
        }

        else if(mentionedMember.roles.highest.position >= message.guild.me.roles.highest.position) {
            return message.channel.send("I am unable to warn members who have the same/higher permissions!")
        }

        mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err))
        
        for (const role of muteDoc.memberRoles) {
            mentionedMember.roles.add(role).catch(err => console.log(err))
        }

        await muteDoc.deleteOne()

        const reason = args.slice(1).join(' ')

        message.channel.send(`Unmuted ${mentionedMember} ${reason ? `for **${reason}**` : ''}`)
    }
}