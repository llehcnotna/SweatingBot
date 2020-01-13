const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    // >help
    
    if(args[0] === 'botinfo'){
        message.reply(`\`\`\`${config.prefix}botinfo\n\nShows information about this bot.\`\`\``);
        return;
    };
    if(args[0] === 'help'){
        message.reply(`\`\`\`${config.prefix}help\n\nShows the default help menu.\`\`\``);
        return;
    };
    if(args[0] === 'kick'){
        message.reply(`\`\`\`${config.prefix}kick <user> <reason>\n\nKicks mentioned user.\`\`\``);
        return;
    };
    if(args[0] === 'member'){
        message.reply(`\`\`\`${config.prefix}member <user>\n\nGives or removes "Sweating" role from the mentioned user.\`\`\``);
        return;
    };
    if(args[0] === 'ping') {
        message.reply(`\`\`\`${config.prefix}ping\n\nping pong!\`\`\``);
        return;
    };
    if(args[0] === 'uptime'){
        message.reply(`\`\`\`${config.prefix}uptime\n\nShows current client uptime.\`\`\``);
        return;
    };

    if(!args[0]) {
    let helpEmbed = new Discord.RichEmbed()
    .setColor('')
    .setTitle('**SweatingBot Help**')
    .setDescription(`Prefix: **${config.prefix}**`)
    .addField('**__Commands__**', `For more information on a specific command use \`${config.prefix}help <command>\``)
    .addField(`botinfo`, 'Sends information about this bot.')
    .addField(`help`, 'Sends this message.')
    .addField(`kick`, 'kicks the mentioned user.')
    .addField(`member`, 'adds or removes Sweating role from user.')
    .addField(`ping`, 'Gets the bot\'s ping.')
    .addField(`uptime`, 'Shows how long the bot has been running for.')

    message.author.send(helpEmbed);

    } else {
        let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
        if(!command) return message.channel.send(`No command called "${args}" found.`)
    };
};

module.exports.help = {
    name: 'help',
    aliases: ['h']
};
