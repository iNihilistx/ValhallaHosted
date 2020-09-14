const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
	const subReddits = ["eyebleach", "wholesomememes", "babycorgis", "catloaf", "unstirredpaint"]
	const random = subReddits[Math.floor(Math.random() * subReddits.length)];
	const img = await randomPuppy(random);

	const embed = new Discord.MessageEmbed()
		.setImage(img)
		.setTitle(`From /r/${random}`)
		.setURL(`https://reddit.com//${random}`)
		.setTimestamp()
		.setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

	message.channel.send(embed);

}

module.exports.config = {
	name: "wholesome",
	description: "sends wholesome pictures",
	usage: "??wholesome",
	accessableby: "Members",
	aliases: []

}
