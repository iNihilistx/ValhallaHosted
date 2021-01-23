const { execute } = require("./help");

module.exports = {
    name: "purgehelp",
    usage: "=PurgeHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Purge Tutorial:",
                fields:[{
                    name: "Purge",
                    value: "``=purge [Number 1-99]``"
                },
                {
                    name: "How To:",
                    value: "=purge followed by the amount of messages you'd like to remove. of the member, followed by the reason. Only 99 messages can be deleted at a time!"
                },
            ],
            timestamp: new Date(),
            footer: {
                text: "© Sunny"
            }
            }
        })
    }
}