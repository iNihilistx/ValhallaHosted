const { execute } = require("./help");

module.exports = {
    name: "memberinfohelp",
    usage: "=memberinfohelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Memberinfo Tutorial:",
                fields:[{
                    name: "memberinfo",
                    value: "``??memberinfo @member``"
                },
                {
                    name: "How To:",
                    value: "??memberinfo followed by the @ of the member you want to see information about!"
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