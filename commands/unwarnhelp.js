const { execute } = require("./help");

module.exports = {
    name: "unwarnhelp",
    usage: "??unwarnHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Valhalla Unwarn Tutorial:",
                fields:[{
                    name: "Unwarn",
                    value: "``??unwarn @member [warn id]``"
                },
                {
                    name: "How To:",
                    value: "??unwarn followed by the @ of the member you want to unwarn, followed by the ID of the warn, this ID can be found from using the warnings command!"
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