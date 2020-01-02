// Required Libraries //
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

////////////////////////

// Command Handler Setup //
fs.readdir('./commands', (err, files) => {
    
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if (jsfile.length <= 0){
        return console.log('couldn\'t find commands.');
    };

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[ LOG ] ${f} loaded!`);
        client.commands.set(props.help.name, props);
        // Aliases
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name)
        });
    
    });
});
///////////////////////////

// Client Events (Playing, Watching, Streaming) //
client.on('ready', async () => {
    console.log(`\n[ LOG ] ${client.user.username} is online...`);
    client.user.setStatus('online');

    function setActivity() {
        var gameInfo = [`${config.prefix}help`, 'Javascript', '💦'
    ]
        var info = gameInfo[Math.floor(Math.random() * gameInfo.length)];

        client.user.setActivity(info);
    };

    setInterval(setActivity, 1000 * 60 * 10);
});

//////////////////////////////////////////////////

// Server Join and Leave messages //
client.on('guildMemberAdd', member => {
    
    var role = member.guild.roles.find(r => r.name === 'Donkey');
    if(!role) console.log('[ LOG ] I couldn\'t find a role to match.');
    member.addRole(role);

    const welcomeMessage = [`Welcome ${member.user}, remind Annie that she is a mere mortal!`, `Welcome ${member.user}, enjoy your stay here at Sweating HQ 💦`, `What's up bad bitch? how you doin.`, `Dro says hmmm... welcome ${member.user}`
]
    const message = welcomeMessage[Math.floor(Math.random() * welcomeMessage.length)];
    member.guild.channels.find(c => c.id === '645354390492020789').send(message);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find(c => c.id === '645354390492020789').send(`We're sorry to see you go ${member.user.username}!`);
});

////////////////////////////////////

// Perms Stuff... //
client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return message.channel.send('This client does not have DM\'s enabled.');

    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandfile = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
    if (commandfile) commandfile.run(client, message, args);
});

////////////////////

// Login Token //
client.login(process.env.BOT_TOKEN);

/////////////////
