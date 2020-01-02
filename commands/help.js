const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >help
    
    if(args[0] === 'botinfo'){
        message.reply('**Usage:** \`>botinfo\`');
        return;
    };
    if(args[0] === 'help'){
        message.reply('**Usage:** \`>help\`');
        return;
    };
    if(args[0] === 'member'){
        message.reply('**Usage:** \`>member @user\`');
        return;
    };
    if(args[0] === 'ping') {
        message.reply('**Usage:** \`>ping\`');
        return;
    };
    if(args[0] === 'uptime'){
        message.reply('**Usage:** \`>uptime\`');
        return;
    };

    message.channel.send(`**${message.author.username}**, Check your DM's!`).then(function (message) {
        message.react('🗨');
    });

    let helpEmbed = new Discord.RichEmbed()
    .setColor('')
    .setTitle('**SweatingBot Help**')
    .setDescription(`Prefix: **${config.prefix}**`)
    .addField('**__Commands__**', `For more information on a specific command use \`${config.prefix}help <command>\``)
    .addField(`botinfo`, 'Sends information about this bot.')
    .addField(`help`, 'Sends this message.')
    .addField(`member`, 'adds or removes Sweating role from user.')
    .addField(`ping`, 'Gets the bot\'s ping.')
    .addField(`uptime`, 'Shows how long the bot has been running for.')

    message.author.send(helpEmbed);
};

module.exports.help = {
    name: 'help',
    aliases: ['h']
};