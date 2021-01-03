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
                    value: "??warn followed by the @ of the member, followed by the reason. A reason should always be provided when warning someone! Once the warning system reaches the max amount of warns[3]. The next warn will remove the user from the server!"
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