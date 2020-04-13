const skip = require("../service/music/skip")
module.exports = {
	name: 'skip',
	description: 'Pula uma música!',
	execute(message) {
		skip(message);
	},
};