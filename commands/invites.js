const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dev_ids = ["271016950560194561"]; // an array of IDs of the bot's developers - only these people will be able to execute this command


// Note: this snippet requires the variables "client" and "message" to work, these need to be provided by your script



var allowedToUse = false;
dev_ids.forEach(id => {
    if(message.author.id == id)
        allowedToUse = true;
});

if(allowedToUse) {
    let invites = ["ignore me"], ct = 0;
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
            ct++;

            if(ct >= client.guilds.size) {
                invites.forEach((invite, i) => {
                    if(invite == undefined)
                        invites.splice(i, 1);
                }); 

                invites.shift();
                invites.forEach((invite, i) => invites[i] = "- " + invite);
                invites = invites.join("\n\n");

                let embed = new Discord.RichEmbed()
                .setTitle("All Invites:")
                .setDescription(invites);

                message.channel.send(embed);
            }
        }).catch(err => {
            ct++;
        });
    });
}
else {
    message.reply("this command can only be used by a developer.");
}
}
module.exports.help = {
    name: 'invites',
    aliases: ['']
}
