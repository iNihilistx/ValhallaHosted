const { execute } = require("./help");

module.exports = {
    name: "kickhelp",
    usage: "??KickHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Valhalla Kick Tutorial:",
                fields:[{
                    name: "Kick",
                    value: "``??kick @member [reason]``"
                },
                {
                    name: "How To:",
                    value: "??kick followed by the @ of the member, followed by the reason. The reason is optional, but it allows for people to see why the user was removed from the server!"
                },
            ],
            timestamp: new Date(),
            footer: {
                text: "© Valhalla"
            }
            }
        })
    }
}