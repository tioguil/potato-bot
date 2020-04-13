const pause = require("../service/music/pause")
module.exports = {
    name: 'pause',
    description: 'Listar todos os comandos disponíveis.',
    execute(message, client, args) {
        pause(message);
    },
};