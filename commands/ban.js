module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('BAN_MEMBERS'))
		message.channel.send("You lack the permissions needed for this command!");
	else {
		let member = message.mentions.members.first();
		if (member) {
			try {
				await member.ban();
				console.log(member.tag + " has been kicked from the server!");
				message.channel.send(`${member}, has been kicked from the server!`)
			}
			catch (err) {
				console.log(err);
			}
		}
	}
}
module.exports.config = {
	name: "ban",
	description: "",
	usage: "=ban",
	accessableby: "Moderators",
	aliases: []
}