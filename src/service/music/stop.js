module.exports = stop = (message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!message.member.voice.channel) return message.channel.send('Você precisa estar em um canal de voz para parar a música!');
    serverQueue.connection.dispatcher.end();
}