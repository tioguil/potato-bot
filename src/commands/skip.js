const skip = require("../service/music/skipe")
module.exports = {
	name: 'skip',
	description: 'Pula uma música!',
	execute(message) {
		skip(message);
	},
};