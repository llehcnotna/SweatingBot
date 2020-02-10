const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >open

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
        }).then(() => {
            message.delete();
            message.channel.send(`**This channel has been reopend**`).then(function (message) {
                message.react('🔓');
            });
        });
};

module.exports.help = {
    name: 'open',
    aliases: ['']
};
