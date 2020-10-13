const Discord = require('discord.js')
const weather = require('weather-js')

module.exports.run = async (bot, message, args) => {

    if (!args.length) {
        return message.channel.send("Please provide a valid location")
    }
    weather.find({ search: args.slice(0).join(' '), degreeType: 'C' }, function (error, result) {

        if (result === undefined || result / length === 0) return message.channel.send("**Invalid** location");

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`** ${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('orange')
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}`, true)
            .addField('wind', current.winddisplay, true)
            .addField('Feels like', `${curent.feelslike}`, true)
            .addField('Humidity', `${current.humidity}%, true`)

        message.channel.send(weatherinfo)

    })

}

module.exports.config = {
    name: "weather",
    description: "checks forecast",
    aliases: []
}