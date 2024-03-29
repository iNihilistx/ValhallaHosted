const { execute } = require("./kick")

const userReg = RegExp(/<@!?(\d+)>/)

module.exports = {
    name: "unban",
    description: "unbans a user from the server",
    usage: "<member> [reason]",
    async execute(message, args) {
        const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : args[0]
        const mentionedUser = await message.client.users.fetch(userID).catch(() => null)
        
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("You do not have permission to use the **Unban** command!").then(m => m.delete({timeout: 2000}))
            message.delete()
        }
        else if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("Sunny does not have permission to use the **Unban** command!")
        }
        else if(!mentionedUser) {
            return message.reply("You need to mention a user to unban!")
        }

        const allBans = await message.guild.fetchBans()
        const bannedUser = allBans.get(mentionedUser.id)

        if (!bannedUser) {
            return message.channel.send("This Member is not banned!")
        }

        const reason = args.slice(1).join(' ')

        message.guild.members.unban(mentionedUser.id, [reason]).catch(err => console.log(err))
        message.channel.send(`Unbanned ${mentionedUser} ${reason ? `for **${reason}**` : ''}`)
    }
}