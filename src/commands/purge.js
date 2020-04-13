module.exports = {
	name: 'purge',
	description: 'Exclui as últimas mensagens do bate-papos.',
	async execute(message, client, args) {
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[0], 10);
		}catch(err) {
			return message.reply('Forneça o número de mensagens a serem excluídas. (máximo 100)')
		}

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Forneça um número entre 2 e 100.');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Não foi possível excluir as mensagens devido a: ${error}`));
	},
};