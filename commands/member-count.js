module.exports.run = async (client, message, arguments) => {
    const guild = client.guilds.get("737386427637170239");
    setInterval(function () {
        var memberCount = guild.members.filter(member => !member.user.bot).size;
        var memberCountChannel = client.channels.get("754931819064852510");
        memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
};