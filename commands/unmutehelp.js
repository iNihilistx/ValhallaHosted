const { execute } = require("./help");

module.exports = {
    name: "unmutehelp",
    usage: "=unmuteHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Unmute Tutorial:",
                fields:[{
                    name: "Unmute",
                    value: "``=unmute @member``"
                },
                {
                    name: "How To:",
                    value: "=unmute followed by the @ of the member you want to unwarn!"
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