const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // >close

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.delete();
            message.channel.send(`**This channel has been closed!**`).then(function (message) {
                message.react('🔒');
            });
        });
};

module.exports.help = {
    name: 'close',
    aliases: ['']
};
