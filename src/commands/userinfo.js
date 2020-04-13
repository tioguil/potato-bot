const { getUserFromMention } = require('../service/user/getUser')

module.exports = {
	name: 'userinfo',
	description: 'Obtenha informações sobre um usuário.',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);
		const user = getUserFromMention(args[0], client);
		message.channel.send(`\`\`\`Name: ${user.username}\nID: ${user.id}\`\`\`${user.displayAvatarURL({ dynamic: true })}`);
	}
};