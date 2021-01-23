const usedCommand = new Set();

module.exports = {
    name: "help",
    description: "Displays the list of commands available",
    usage: "=help",
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
                    title: "The Current Commands For Sunny ",
                    description: "A moderation bot built to keep things simple. Sunny handles everthing moderator related whilst giving access to some fun commands!",
                    fields: [{
                        name: " My prefix is: ",
                        value: "``=``"
                    },
                    {
                        name: ":shield: Moderation Commands: ",
                        value: "kick, ban, warn, warnings, unwarn, mute, unmute, serverinfo, memberinfo, purge, ping"
                    },
                    {
                        name: ":robot: Random Bot Commands: ",
                        value: "meme, uwu, wholesome, avatar, hug, cursed, slap, bonk"
                    },
                    {
                        name: "ℹ️ Help Commands: ",
                        value: "kickhelp, banhelp, purgehelp, unbanhelp, mutehelp, unmutehelp, warnhelp, warningshelp, unwarnhelp, memberinfohelp "
                    },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "© Sunny"
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