const {MessageEmbed} = require('discord.js');

module.exports = song = (message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('Não há nada tocando.');

    // Luísa Sonza - BRABA [@Guil ™]
    // ▬▬🔵▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 14s / 2m 17s

    const embed = new MessageEmbed()
        .setTitle(`Tocando agora: ${serverQueue.songs[0].title}`).setURL(serverQueue.songs[0].url)
        .setColor(0xf707f7).setAuthor(serverQueue.songs[0].addedBy.username)
        .setDescription(`Autor: ${serverQueue.songs[0].author}\n`);
    return message.channel.send(embed);

}