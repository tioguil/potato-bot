const playMusic = require("../service/music/playMusic");

module.exports = {
  name: "play",
  description: "Pausa o player de música",
  async execute(message, client, args) {
    await playMusic(message, args);
  },
};
