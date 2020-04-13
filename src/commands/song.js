const song = require("../service/music/song");

module.exports = {
	name: 'song',
	description: 'Detalhe da música que está tocando.',
	execute(message) {
		song(message)
	},
};