const usedCommand = new Set();
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
	const subReddits = ["eyebleach", "wholesomememes", "babycorgis", "catloaf", "unstirredpaint"]
	const random = subReddits[Math.floor(Math.random() * subReddits.length)];
	const img = await randomPuppy(random);

	if (usedCommand.has(message.author.id)) {
		message.reply('You are currently in a cooldown. Wait 15 seconds then try again...').then(m => m.delete({ timeout: 6000 }))
	} else {

		const embed = new Discord.MessageEmbed()
			.setImage(img)
			.setTitle(`From /r/${random}`)
			.setURL(`https://reddit.com//${random}`)
			.setTimestamp()
			.setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

		message.channel.send(embed);

		usedCommand.add(message.author.id);
		setTimeout(() => {
			usedCommand.delete(message.author.id);
		}, 15000);

	}
}

module.exports.config = {
	name: "wholesome",
	description: "sends wholesome pictures",
	usage: "??wholesome",
	accessableby: "Members",
	aliases: []

}
