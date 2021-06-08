const discord = require('discord.js')
const client = new discord.Client()
const {prefix, TOKEN} = require('./config.json')
const Hug = require('./anime/cuddle.json')

client.on('ready', () =>{
    console.log(`${client.user.username} is online`)
})

client.on('message', msg =>{
    // Extreamlyy basic/Shit command handler
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    var HugGif = 0

    switch(command){
        
        case 'ping': msg.channel.send('pong'); break
        case 'avatar': msg.channel.send(msg.author.displayAvatarURL()); break
        case 'hug': {
            HugGif = Hug[Math.floor(Math.random() * Hug.length)];
            msg.channel.send(HugGif); break
        }
    }

})

client.login(TOKEN)