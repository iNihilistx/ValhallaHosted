const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('KICK_MEMBERS')) {
		message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 5000 }))
		message.delete()
		return;
	} else {
		let member = message.mentions.members.first();
		if (member) {
			try {
				await member.kick();
				console.log(member.tag + ` was kicked from the: ${message.guild.name}!`);
				message.channel.send(`${member}, has been kicked from: ${message.guild.name}!`)
			}
			catch (err) {
				console.log(err);
			}
		}
	}

	usedCommand.add(message.author.id);
	setTimeout(() => {
		usedCommand.delete(message.author.id);
	}, 5000)
}
module.exports.config = {
	name: "kick",
	description: "",
	usage: "??kick",
	accessableby: "Moderators",
	aliases: ["kickmember"]
}