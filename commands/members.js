const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    //members

    const memberList = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setTitle('Members of Sweating in this Discord server')
    .setDescription(message.guild.roles.get('662105291642503179').members.map(m => m.user.username).join(', '))

    message.channel.send(memberList);

};

module.exports.help = {
    name: "members",
    aliases: ['']
};
