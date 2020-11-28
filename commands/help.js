const usedCommand = new Set();

module.exports = {
    name: "help",
    description: "Displays the list of commands available",
    usage: "??help",
    async execute (message, args) {
        if (usedCommand.has(message.author.id)) {
            message.reply("You are currently in a cooldown...").then(m => m.delete({ timeout: 5000 }))
            message.delete()
            return;
        } else {
            message.channel.send({
                embed: {
                    author: {
                    },
                    title: "The Current Commands For Valhalla: ",
                    description: "A simple moderation bot, with a built in filter to protect against NSFW content and self promotion. Comes packed with moderation tools and fun commands!",
                    fields: [{
                        name: " My prefix is: ",
                        value: "``??``"
                    },
                    {
                        name: ":shield: Moderation Commands: ",
                        value: "kick, ban, warn, warnings, unwarn, mute, unmute, server, member, purge, ping"
                    },
                    {
                        name: ":robot: Random Bot Commands: ",
                        value: "meme, uwu, wholesome, hug, cursed, slap, bonk"
                    },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "© Valhalla"
                    }
                }
            })
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 20000)
        }
    }
}