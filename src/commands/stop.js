const stop = require("../service/music/stop")
module.exports = {
	name: 'stop',
	description: 'Para de tocar música',
	execute(message) {
		stop(message);
	},
};