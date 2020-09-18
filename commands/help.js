const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`The current available commands:`)
            .setDescription('```| server |  member <@> | mute <@> | unmute <@> | kick <@> | ban <@> | poll <#> <text>  | meme | uwu | wholesome | hug <@> | aesthetic | cursed | ```')
            .addFields({ name: 'Chosen Prefix: ', value: '```??```', inline: true })
            .setColor('#FFA500')
            .setTimestamp()
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);
    }

    if (helpArgs[0]) {
        let command = helpArgs[0];

        if (bot.commands.has(command)) {

            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
                .setAuthor(`${command.config.name} Command`)
                .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
                .setColor('#2EFF00')
                .setTimestamp()

            message.channel.send(embed);
        }
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "??help",
    accessableby: "Members",
    aliases: []
}