module.exports = {
    name: "kick",
    description: "removes a member from the server",
    usage: "<member> {reason}",
    async execute (message, args) {
        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

        if(!message.member.hasPermission('KICK_MEMBERS')){
            return message.reply("You do not have permission to use the **Kick** command!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        else if(!message.guild.me.hasPermission('KICK_MEMBERS')) {
            return message.reply("Valhalla does not have permission to use the **Kick** command!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        else if(!mentionedMember) {
            return message.reply("You need to mention a user in order to kick!")
        }

        const mentionedPosition = mentionedMember.roles.highest.Position
        const memberPosition = message.member.roles.highest.Position
        const botPoisition = message.guild.me.roles.highest.Position

        if(memberPosition <= mentionedPosition) {
            return message.reply("Unable to kick this member because of their roles!")
        }
        else if(botPoisition <= mentionedPosition) {
            return message.reply("Unable to kick this member, because they have higher perms than me")
        }

        const reason = args.slice(1).join(' ')

        try {
            await mentionedMember.kick([reason])

            message.channel.send(`Kicked ${mentionedMember} ${reason ? `for **${reason}**` : ''}`)
        }
        catch(error) {
            message.channel.send('There was an error kicking this member from the server!')
        }
    }
}