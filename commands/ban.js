const userReg = RegExp(/<@!?(\d+)>/)

module.exports = {
    name: "ban",
    description: "Bans a member from the server!",
    usage: "<member> [reason]",
    async execute (message, args) {
        const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : args[0]
        const mentionedUser = await message.client.users.fetch(userID).catch(() => null)

        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.reply("You do not have permission to use the **Ban** commmand!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        else if(!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.reply("Valhalla does not have permission to use the **Ban** command!")
        }
        else if(!mentionedUser) {
            return message.reply("You need to mention a valid user!")
        }

        const allBans = await message.guild.fetchBans()

        if (allBans.get(mentionedUser.id)) {
            return message.reply("This member is already banned in this server!")
        }

        const mentionedMember = message.guild.members.cache.get(mentionedUser.id)

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

        message.guild.members.ban(mentionedUser.id, { reason: reason })

        message.channel.send(`Banned ${mentionedUser} ${reason ? `for **${reason}**`: ''}`)
    }
}