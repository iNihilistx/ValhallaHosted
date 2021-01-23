const { execute } = require("../commands/help");

module.exports = {
    name: "messageDelete",
    description: "",
    usage: "",
    async execute (message, args){
        client.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author,
            image: message.attachments.first() ? message.attachments.first().proxyURL : null
        });
    }
}