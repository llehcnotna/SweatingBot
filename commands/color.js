const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    
    // >color

    let roleEmbed = new Discord.RichEmbed()
    .setTitle('Server colors')
    .setDescription(`\`cyan\ngreen\nblue\npurple\npink\norange\``)
    .setFooter(`use ${config.prefix}color <colorname> to pick a color.`);

    const acceptedRoles = [
        '666147146751279105',
        '661669368211570709',
        '661669325706362890',
        '661669280684834826',
        '661669234350489602',
        '661668933803311181',
        '661668978837553153'];

        const existingRole = acceptedRoles.find(role => message.member.roles.has(role));
        const roleName = message.guild.roles.find(r => r.name === args.join(" "));

        if(args[0] === 'clear') {
            message.member.removeRole(existingRole);
            return message.channel.send(`**${message.author.username}**, Your color has been removed successfully.`);
        };
        if(!args[0]) return message.channel.send(roleEmbed);
        if(!roleName) return message.channel.send(`Please use a color that is listed. See listed colors using ${config.prefix}roles`);
        if(existingRole) await message.member.removeRole(existingRole);
        if(acceptedRoles.includes(roleName.id)) message.member.addRole(roleName);

        message.channel.send(`**${message.author.username}**, Your color has been changed to: \`${roleName.name}\``);

};

module.exports.help = {
    name: 'color',
    aliases: ['colour']
};