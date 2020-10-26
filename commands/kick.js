const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('KICK_MEMBERS')) {
		message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 5000 }))
		message.delete()
		return;
	} else {
		let toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
	
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have the required permissions needed for this command!")
		if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("The bot does not have the required permissions needed for this command!")

		const reason = args[1] || "No reason provided!";
		toKick({
			reason: reason
		})

		message.channel.send(`${toKick} has been kicked from the server! \nThe Reason: ${reason}`)
	
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