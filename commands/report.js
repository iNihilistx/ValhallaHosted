module.exports.run = async (bot, message, args) => {
    let args = message.content.substring(PREFIX.length).split(' ');
    switch (args[0]) {
        case 'report':
            message.delete({ timeout: 3000 });
            let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!target) return message.channel.send('Please provide a user that you wish to report').then(m => m.delete({ timeout: 15000 }));

            let reason = args.slice(2).join(" ");
            if (!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.username}**`).then(m => m.delete({ timeout: 15000 }));

            let reportChannel = message.guild.channels.cache.find(x => x.name === "📒▸logs");

            message.channel.send('Your report has been filed to the staff team. Thank you for reporting!').then(m => m.delete({ timeout: 15000 }));
            reportChannel.send(`**${message.author.username}** has reported **${target.user.username}** for **${reason}**.`);
            break;
    };
};

module.exports.config = {
    name: "report",
    description: "allows a user to report",
    usage: "-report",
    accessableby: "Members",
    aliases: []

}