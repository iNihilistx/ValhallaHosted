const usedCommand = new Set();

module.exports = {
    name: "purge",
    usage: "??purge",
    async execute(message, args) {
        const messageArray = message.content.split(' ');

    
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.reply('You do not have permission to use the purge command!').then(m => m.delete({ timeout: 6000 }))
            message.delete()
        } else {
    
            let deleteAmount;
    
            if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Requires numbers only') }
    
            if (parseInt(args[0]) > 99) {
                return message.reply('You can only delete 99 messages at a time!')
            } else {
                deleteAmount = parseInt(args[0]);
            }
    
            message.channel.bulkDelete(deleteAmount + 1, true);
            await message.channel.send(`**Successfully** Deleted ***${deleteAmount}*** Message(s)!`).then(m => m.delete({ timeout: 5000 }))
    
        }
    
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 6000)
    }
}