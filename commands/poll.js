module.exports.run = async (bot, message, args) => {
    if (message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');

    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')
}

module.exports.config = {
    name: "poll",
    description: "poll",
    usage: "-poll",
    accessableby: "Members",
    aliases: [""]
}
