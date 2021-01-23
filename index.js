const { bot_token, mongo_url, prefix } = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const mongoose = require('mongoose')
const fs = require('fs')
const { ifError } = require('assert')

client.commands = new Discord.Collection()

client.login(bot_token)

const commandFiles = fs.readdirSync('./commands')
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

const muteModel = require('./models/mute')

client.once('ready', () => {
    console.log('Sunny Online')
    client.user.setUsername("[=]Sunny")

    mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('Mongo DB Connected'))

    setInterval(async () => {
        for (const guild of client.guilds.cache) {
            const muteArray = await muteModel.find({
                guildID: guild[0],
            })

            for (const muteDoc of muteArray) {
                if (Date.now() >= Number(muteDoc.length)) {
                    const guild = client.guilds.cache.get(muteDoc.guildID)
                    const member = guild ? guild.members.cache.get(muteDoc.memberID) : null
                    const muteRole = guild ? guild.roles.cache.find(r => r.name == 'Muted') : null

                    if (member) {
                        await member.roles.remove(muteRole ? muteRole.id : '').catch(err => console.log(err))

                        for(const role of muteDoc.memberRoles) {
                            await member.roles.add(role).catch(err => console.log(err))
                        }
                    }
                    
                    await muteDoc.deleteOne().catch(err => console.log(err))
                }
            }
        }
    }, 60000)
})

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send({
        embed: {
            author: {
            },
            title: "The Current Commands For Sunny: ",
            description: "A moderation bot built to keep things simple. Valhalla handles everthing moderator related whilst giving access to some fun commands!",
            fields: [{
                name: " My prefix is: ",
                value: "``=``"
            },
            {
                name: ":shield: Moderation Commands: ",
                value: "kick, ban, warn, warnings, unwarn, mute, unmute, serverinfo, memberinfo, purge, ping"
            },
            {
                name: ":robot: Random Bot Commands: ",
                value: "meme, uwu, wholesome, hug, cursed, slap, bonk, avatar"
            },
            {
                name: "ℹ️ Help Commands: ",
                value: "kickhelp, banhelp, purgehelp, unbanhelp, mutehelp, unmutehelp, warnhelp, warningshelp, unwarnhelp, memberinfohelp"
            },
            ],
            timestamp: new Date(),
            footer: {
                text: "© Valhalla"
            }
        }
    })
})

client.on("ready", () => {
    let statuses  = [
        "=help",
        `over ${client.guilds.cache.size} servers!`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "WATCHING" });
    }, 5000)
})

client.on('guildMemberAdd', async member => {
    const muteDoc = await muteModel.findOne({
        guildID: member.guild.id,
        memberID: member.id,
    })

    if (muteDoc) {
        const muteRole = member.guild.roles.cache.find(r => r.name == 'Muted')

        if (muteRole) member.roles.add(muteRole.id).catch(err => console.log(err))

        muteDoc.memberRoles = []

        await muteDoc.save().catch(err => console.log(err))
    }
})

client.on('message', message => {
    if(!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.substring(prefix.length).split(' ')
    const command = args.shift()


    const cmd = client.commands.get(command)

    if (!cmd) return;

    try {
        cmd.execute(message, args)
    } catch(error) {
        console.log(error)
        message.reply('Error whilst running this command!')
    }
})