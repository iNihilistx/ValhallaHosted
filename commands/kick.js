module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('KICK_MEMBERS'))
		message.channel.send("You lack the permissions needed for this command!");
	else {
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
}
module.exports.config = {
	name: "kick",
	description: "",
	usage: "??kick",
	accessableby: "Moderators",
	aliases: ["kickmember"]
}