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

    //Ping command
    if(command === 'ping'){
        msg.channel.send('OK')
    }

    //Basic avatar command
    if (command === 'avatar') {
        // Send the user's avatar URL
        msg.channel.send(msg.author.displayAvatarURL());
    }

      //Rip command
    if (command === 'rip') {
        var attachment = ['https://i.imgur.com/w3duR07.png']
        msg.channel.send(attachment);
    }

    if (command === 'gif'){
        //Grabs link from json file and randomizes it
        const randomgif = ani[Math.floor(Math.random() * ani.length)];
        msg.channel.send(randomgif)
    }
})

client.login(TOKEN)