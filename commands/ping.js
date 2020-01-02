const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // ping

    let pingEmbed = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setDescription(`Pong! \`${message.createdTimestamp - Date.now()} ms\``);

    message.channel.send(pingEmbed);

};

module.exports.help = {
    name: 'ping',
    aliases: ['p']
};