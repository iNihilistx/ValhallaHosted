module.exports = {
    name: 'ping',
    description: 'shows the ping',
    execute(message, args) {
        message.channel.send(`Valhallas' Current Ping Is: ${message.client.ws.ping}ms!`)
    }
}