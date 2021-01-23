const { execute } = require("./help");

module.exports = {
    name: "unbanhelp",
    usage: "=unbanHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Unban Tutorial:",
                fields:[{
                    name: "Unban",
                    value: "``=unban @member [reason]``"
                },
                {
                    name: "How To:",
                    value: "=unban followed by the @ of the member, followed by the reason. The reason is optional, but it allows for people to see why the user's ban was reversed!"
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