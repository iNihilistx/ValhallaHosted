const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild) return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE',
    });
    const deletionLog = fetchedLogs.entries.first();
    if (!deletionLog) return message.channel.send(`A message sent by ${message.author.tag}was deleted, but no matching audit log was found`);

    const { exectutor, target } = deletionLog;

    if (targetid === message.author.id) {
        message.channel.send(`A message sent by ${message.author.tag} was deleted by ${exectutor.tag}`);
    } else {
        message.channel.send(`A message by ${message.author.tag}was deleted, but we can't find who.`);
    }
};

module.exports.config = {
    name: "deleted",
    description: "shows who deleted a message",
    usage: "",
    accessableby: "",
    aliases: []

}
