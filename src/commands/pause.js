const pause = require("../service/music/pause")
module.exports = {
    name: 'pause',
    description: 'Pausa o player de música',
    execute(message, client, args) {
        pause(message);
    },
};