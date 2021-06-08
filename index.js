const discord = require('discord.js')
const client = new discord.Client()
const {prefix, TOKEN} = require('./config.json')
const ani = require('./anime/rand.json')

client.on('ready', () =>{
    console.log(`${client.user.username} is online`)
})

client.on('message', msg =>{
    // Extreamlyy basic/Shit command handler
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    var randomgif = 0

    var attachment = ['https://i.imgur.com/w3duR07.png']

    


    switch(command){
        

        case 'ping': msg.channel.send('pong'); break
        case 'avatar': msg.channel.send(msg.author.displayAvatarURL()); break
        case 'rip': msg.channel.send(attachment); break
        case 'gif': {
            randomgif = ani[Math.floor(Math.random() * ani.length)];
            msg.channel.send(randomgif); break
            }
    }

})

client.login(TOKEN)