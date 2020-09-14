module.exports.run = async (client, message, arguments) => {
    const guild = client.guilds.get("566596189827629066");
    setInterval(function () {
        var memberCount = guild.members.filter(member => !member.user.bot).size;
        var memberCountChannel = client.channels.get("626462657817477131");
        memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
};