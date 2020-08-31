module.exports.run = async (bot, message, args) => {

    message.delete()
    //this will mention or grab the user
    let target = message.mentions.members.first() || message.guild.members.get(ars[0])
    if (target) return message.channel.send("You appear to have mentioned an invalid user!").then(m => m.delte(15000))

    // the reasoning
    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send(`Please provide a reason for the report **${target.user.tag}`).then(m => m.delte(15000))

    //grabs the report channel to send the report
    let sChannel = message.guild.channels.find(x => x.name === "reports")

    //send to the report channel and add a tick and cross

    message.channel.send("Your report has been sent to the Moderators. Thank you!").then(m => m.delete(15000))
    sChannel.send(`**${message.author.tag}** has reported **${target.user.tag}** for **${reason}**!`).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })
}

module.exports.config = {
    name: "report",
    description: "reports a member within the guild",
    usage: "-report <user> <reason>",
    accessableby: "Members"
}