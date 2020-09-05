var Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You can't do that");

    var user = message.mentions.user.first();
    if (!user) return message.reply("You failed to mention anyone");

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch (err) {
        member = null;
    }

    if (!member) return message.reply("They aren't in the server");

    var reason = args.splice(1).join(' ');

    var channel = message.guild.channels.cache.find(c => c.name === 'warning');

    var log = new Discord.MessageEmbed()
        .setTitle('User Warned')
        .addField('User: ', user, true)
        .addField('By: ', message.author, true)
        .addField('Reason: ', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
        .setTitle('You have been warned')
        .setDescription(reason);

    try {
        user.send(embed);
    } catch (err) {
        console.warn(err);
    }

    message.channel.send(`**${user}** has been warned by **${message.author}**`)
}