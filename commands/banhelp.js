const { execute } = require("./help");

module.exports = {
    name: "banhelp",
    usage: "=banHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Ban Tutorial:",
                fields:[{
                    name: "ban",
                    value: "``??ban @member [reason]``"
                },
                {
                    name: "How To:",
                    value: "??ban followed by the @ of the member, followed by the reason. The reason is optional, but it allows for people to see why the user was banned from the server!"
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