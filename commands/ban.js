module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission('BAN_MEMBERS'))
		message.channel.send("You lack the permissions needed for this command!");
	else {
		try {
			let bannedMember = await message.guild.members.ban(args);
			if (bannedMember)
				console.log(bannedMember.tag + " was banned from the server!");
			message.channel.send(`${bannedMember} has been banned from the server!`)
		}
		catch (err) {
			console.log(err);
		}
	}
}
module.exports.config = {
	name: "ban",
	description: "",
	usage: "-ban",
	accessableby: "Moderators",
	aliases: []
}