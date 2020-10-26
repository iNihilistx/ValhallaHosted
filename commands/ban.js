const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('BAN_MEMBERS')) {
		message.reply("You do not have the required permissions needed for this command!").then(m => m.delete({ timeout: 6000 }))
		message.delete()
		return;
	} else {
		let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

		if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You are lacking the needed perms")

		const reason = args[1] || "No reason provided";

		toBan.ban({
			reason: reason
		})

		message.channel.send(`${toBan} has been banned from the server! \n Reason Provided: ${reason}`)
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