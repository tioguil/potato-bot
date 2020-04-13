const {userIsLogged} = require("./checking")

module.exports = pause = async (message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!userIsLogged(message)){ return;}

    serverQueue.connection.dispatcher.pause();
    serverQueue.textChannel.send("Player pausado! :pause_button:");
}