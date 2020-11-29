const { execute } = require("./help");

module.exports = {
    name: "mutehelp",
    usage: "??muteHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Valhalla Mute Tutorial:",
                fields:[{
                    name: "Mute",
                    value: "``??mute @member [Time in seconds] [Reason]``"
                },
                {
                    name: "How To:",
                    value: "??mute followed by the @ of the member, followed by length for the mute (in seconds, the max time for a mute being '2592000' which is one month!). The reason is optional, but it allows for people to see why the member has been muted!"
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