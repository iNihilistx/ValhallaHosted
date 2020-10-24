const ms = require('ms');
module.exports.run = (bot, message, args) => {
    if (!client.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    let modRole = message.guild.roles.find('name', 'delet Mod');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply('you have insufficient permissions to use this command.').catch(console.error);
    }
    if (!time) return message.reply('you must set a duration for the lockdown in either hours, minutes or seconds.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**Lockdown lifted.**');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`**Channel locked** for ${ms(ms(time), { long:true })}.`).then(() => {

                bot.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('**Lockdown lifted.**')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};

module.exports.config = {
    name: "lockdown",
    usage: "??lockdown",
    aliases: []
}