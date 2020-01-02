const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    //member @user

    if(!message.member.hasPermission('MANAGE_ROLES')) return;

    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    const memberRole = message.guild.roles.find(r => r.name === 'Sweating');

    // Error Embed (role not found)
    const roleError = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setDescription(`**${message.author.username}**, role not found, please create a role named \`Sweating\``);

    if(!memberRole) return message.channel.send(roleError);

    // Error Embed (user not mentioned)
    const userError = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setDescription(`**${message.author.username}**, Please specify a user that is on this server.`);
    
    if(!mUser) return message.channel.send(userError);

    // Role Set Embed
    const roleSet = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setDescription(`**${mUser.user.username}** is now a member of Sweating.`);

    // Role Remove Embed
    const roleRemove = new Discord.RichEmbed()
    .setColor('#5BACEA')
    .setDescription(`**${mUser.user.username}** is no longer a member of Sweating.`);

    if(!mUser.roles.has(memberRole.id)) {
        await(mUser.addRole(memberRole.id));
        return message.channel.send(roleSet)
    }
    else {
        await(mUser.removeRole(memberRole.id));
        return message.channel.send(roleRemove)
    }
};

module.exports.help = {
    name: "member",
    aliases: ['']
};