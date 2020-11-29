module.exports = {
    name: 'ping',
    description: 'shows the ping',
    execute(message, args) {
        message.channel.send(`The current ping is: ${message.client.ws.ping}ms!`)
    }
}