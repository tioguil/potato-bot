const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'Listar todos os comandos disponíveis.',
	execute(message) {
		let str = '```\nComando     | Descrição\n\n';

		const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			let lengthSpace = 10 - command.name.length
			str += `${command.name} `;
			for (let i = 0; i < lengthSpace; i++){
				str += " ";
			}
			str += ` | ${command.description} \n`
		}
		str += '```';
		message.channel.send(str);
	},
};