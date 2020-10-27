const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 6000 }))
        message.delete()
        return;
    } else {
        let member = message.mentions.members.first();
        if (member) {
            try {
                await member.ban();
                console.log(member.tag +  `has been banned from: ${message.guild.name}!`);
                message.channel.send(`${member}, has been banned from:  ${message.guild.name}!`)
            }
            catch (err) {
                console.log(err);
            }
        }

    }

    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 6000);
}
module.exports.config = {
    name: "ban",
    description: "",
    usage: "??ban",
    accessableby: "Moderators",
    aliases: []
}