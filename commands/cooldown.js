const Usedcommand = new Set();

module.exports.run = async (bot, message, args) => {
    if (Usedcommand.has(message.author.id)) {
        message.reply("You're currently in cooldown...")
    } else {
        message.reply("You're no longer in cooldown!")

        Usedcommand.add(message.author.id);
        setTimeout(() => {
            Usedcommand.delete(message.author.id);
        }, 4000); //this is within Mseconds and can be changed to anything
    }
}

module.exports.config = {
    name: "cooldown",
    description: "cooldown",
    usage: "??cooldown",
    accessableby: "Members",
    aliases: []
}