const { execute } = require("./help");

module.exports = {
    name: "mutehelp",
    usage: "=muteHelp",
    async execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                },
                title: "Sunnys' Mute Tutorial:",
                fields:[{
                    name: "Mute",
                    value: "``??mute @member [Time in seconds][s] [Reason]``"
                },
                {
                    name: "How To:",
                    value: "??mute followed by the @ of the member, followed by length for the mute (in seconds, the max time for a mute being '2592000' which is one month!), make sure to include an 's' after the time. The reason is optional, but it allows for people to see why the member has been muted!\n\An example is ??mute @member 10s spamming"
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