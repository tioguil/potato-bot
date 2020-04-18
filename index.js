const fs = require('fs')
const Discord = require('discord.js');
const Client = require('./src/service/client/Client');

const {
	prefix,
} = require('./src/config.json');

// Taking tokens from environment variables
const token = process.env.TOKEN_BOT;

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.once('ready', () => {
	console.log(client.guilds.cache)
	client.user.setActivity('minha vida fora! para ajuda -> .help', {type: 'PLAYING'}).catch(console.error)
	console.log('Online!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

// listening for the message event
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	if(message.channel.type === "dm") return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	try {
		command.execute(message, client, args);
	} catch (error) {
		console.error(error);
		await message.reply('Ocorreu um erro ao tentar executar esse comando!');
	}
});

client.login(token);