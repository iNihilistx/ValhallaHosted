module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('BAN_MEMBERS'))
		message.channel.send("You lack the permissions needed for this command!");
	else {
		let banmember = message.mentions.members.first();
		if (banmember) {
			try {
				await banmember.ban();
				console.log(member.tag + " has been kicked from the server!");
				message.channel.send(`${banmember}, has been kicked from the server!`)
			}
			catch (err) {
				console.log(err);
			}
		}
	}
}
module.exports.config = {
	name: "kick",
	description: "",
	usage: "=kick",
	accessableby: "Moderators",
	aliases: ["kickmember"]
}