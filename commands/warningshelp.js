const { execute } = require("./help");

module.exports = {
    name: "warningshelp",
    usage: "=warningsHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Warning Tutorial:",
                fields:[{
                    name: "Warnings",
                    value: "``??Warnings @member``"
                },
                {
                    name: "How To:",
                    value: "??warnings @member, this will show if the user has any bans against them, then showing what they'd done in order to earn a warn, alongside the ID which can be used to unwarn the member!"
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