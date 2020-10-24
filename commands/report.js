const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("You must mention a user to file a report").catch(console.error);
    if(reason.length < 1) return message.reply("You need to supply a reason for the report");
    
    message.channel.send({embed: {
        color: orange,
        author: {
            name: `Report recieved from ${message.author.tag} (${message.author.id})`,
            icon_url: message.author.avatarURL
        },
        url: "",
        description: `\`\`\`css\n@${user.username}#${user.discriminator} ${reason}\`\`\``,
        timestamp: new Date(),
        footer: {
            icon_url: '',
            text: "Report system: Valhalla"
        }
    } 
    })
}

module.exports.config = {
    name: "report",
    usage: "??report",
    aliases: []
}