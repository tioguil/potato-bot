const resume = require("../service/music/resume");

module.exports = {
    name: "resume",
    description: "Retomar a reprodução",
    async execute(message, client, args) {
        await resume(message, args);
    },
};
