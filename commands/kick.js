const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //>kick @user reason

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`**${message.author.username}**, You do not have permission to use this command.`);

    let kMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kMember) return message.channel.send(`**${message.author.username}**, Can\'t find a mentioned user.`);

    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send('Please provide a reason.');

    if(kMember.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked.");

    message.guild.member(kMember).kick(kReason);
    message.channel.send(`**${kMember.user.username}** has been kicked.`);

};

module.exports.help = {
    name: 'kick',
    aliases: ['']
};