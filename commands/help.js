const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`The current available commands:`)
            .setDescription('```| uptime | server |  member | mute | unmute | kick | ban | github | meme | cat | wholesome | aesthetic | cursed | ```')
            .addFields({ name: 'Chosen Prefix: ', value: '```-```', inline: true })
            .setColor('#FFA500')
            .setFooter('Valhalla', 'https://i.imgur.com/G5bui5n.png')

        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
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

            message.channel.send(embed);
        }
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "=help",
    accessableby: "Members",
    aliases: []
}