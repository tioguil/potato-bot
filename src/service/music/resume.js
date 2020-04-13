const {userIsLogged} = require("./checking")

module.exports = pause = async (message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!userIsLogged(message)){ return;}

    serverQueue.connection.dispatcher.resume();
    serverQueue.textChannel.send("Retomada reprodução! :play_pause: ");
}