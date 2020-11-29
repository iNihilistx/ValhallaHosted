const { execute } = require("./help");

module.exports = {
    name: "warnhelp",
    usage: "??warnHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Valhalla Warn Tutorial:",
                fields:[{
                    name: "Warn",
                    value: "``??warn @member [reason]``"
                },
                {
                    name: "How To:",
                    value: "??warn followed by the @ of the member, followed by the reason. A reason should always be provided when warning someone!"
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