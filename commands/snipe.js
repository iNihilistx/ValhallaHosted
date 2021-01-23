const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "messageDelete",
    description: "",
    usage: "",
    async execute (message, args){
        const snipeEmbed = new Discord.MessageEmbed()
        .setAuthor(`Sniped: ${msg.author.tag}`, msg.author.displayAvatarURL({dynamic: true, size: 256}))
        .setDescription(msg.content)
        .setTimestamp()
    
        if(msg.image) snipeEmbed.setImage(msg.image);
        message.channel.send(snipeEmbed)
    
    }
}