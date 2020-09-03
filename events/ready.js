const Discord = require("discord.js")

module.exports = bot => {
    if (Object.keys(this.config.presence).length !== 0) {
        this.user.setPresence({
            game: {
                name: client.users.size + ' -help',
                type: this.config.presence.type
            },
            status: "Valhalla Online"
        }).catch(console.error);
    }
}