const ytdl = require("ytdl-core");
const {userIsLogged, okPermissions} = require("./checking");
const {MessageEmbed} = require('discord.js');

let index = 0;
let speaking = false;
module.exports = playMusic = async (message, args) =>{
    try {
        const queue = message.client.queue;
        const serverQueue = message.client.queue.get(message.guild.id);

        let voiceChannel = userIsLogged(message);
        if (!voiceChannel){
            return;
        }
        if (!okPermissions){
            return;
        }

        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
            author:songInfo.author.name,
            addedBy: message.member.user
        };

        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 0.20,
                playing: true
            };
            index = 0;

            queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                let connection = await voiceChannel.join();
                console.log("connecting server:", message.guild.name)
                queueConstruct.connection = connection;
                play(message, queueConstruct.songs[queueConstruct.songs.length -1]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }
        } else {
            serverQueue.songs.push(song);
            if(!speaking){
                play(message, serverQueue.songs[serverQueue.songs.length -1]);
                return;
            }
            const embed = new MessageEmbed()
                .setTitle(`${song.title} foi adicionado à fila!`)
                .setURL(song.url)
                .setColor(0xf707f7);
            return message.channel.send(embed);
        }
    } catch (error) {
        console.log(error);
        message.channel.send(error.message);
    }

}

const play = (message, song) => {
    const queue = message.client.queue;
    const guild = message.guild;
    const serverQueue = queue.get(message.guild.id);

    if (!song) {
        return;
    }

    serverQueue.connection.play(ytdl(song.url),{volume:  serverQueue.volume})
        .on("finish", () => {
            // serverQueue.songs.shift();
            index++
            play(message, serverQueue.songs[index]);
        })
        .on("error", error => console.error(error))
        .on("speaking", speakingListener => {speaking = speakingListener;});
    const embed = new MessageEmbed()
        .setTitle(`Tocando: ${song.title}`)
        .setURL(song.url)
        .setColor(0xf707f7)
        .setAuthor(serverQueue.songs[0].addedBy.username);
    serverQueue.textChannel.send(embed);
}