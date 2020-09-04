module.exports.run = async (bot, message, args) => {
    message.delete()
    // mentioned or grabbed user
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!target) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

    // reasoning definition
    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**`).then(m => m.delete(15000))

    // grab reports channel
    let sChannel = message.guild.channels.find(x => x.name === "tut-reports")

    // send to reports channel and add tick or cross

    message.channel.send("Your report has been filed to the staff team. Thank you!").then(m => m.delete(15000))
    sChannel.send(`**${message.author.tag}** has reported **${target.user.tag}** for **${reason}**.`).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })
}

module.export.config = {
    name: "-report",
    description: "",
    usage: "-report",
    accessableby: "Members",
    aliases: []
}