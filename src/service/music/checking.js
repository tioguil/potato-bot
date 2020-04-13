module.exports = {
    userIsLogged: (message) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel){
            return message.channel.send(
                "Você precisa estar em um canal de voz para tocar música!"
            );
        }
        return voiceChannel;
    },
    okPermissions: (message) =>{
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send(
                "Eu preciso das permissões para participar e falar no seu canal de voz!"
            );
        }
        return true;
    }
}