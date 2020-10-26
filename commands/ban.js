const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {

        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
    }

	usedCommand.add(message.author.id);
	setTimeout(() => {
		usedCommand.delete(message.author.id);
	}, 6000);
	
module.exports.config = {
	name: "ban",
	description: "",
	usage: "??ban",
	accessableby: "Moderators",
	aliases: []
}