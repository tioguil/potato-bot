const {userIsLogged} = require("../service/music/checking")

module.exports = {
    name: 'volume',
    description: 'change vol!',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);

        if (!userIsLogged(message)){ return;}

        try{
            const volume = parseFloat(message.content.split(" ")[1])/100;
            if(volume >= 0 && volume <= 1){
                try{
                    serverQueue.volume = volume;
                    serverQueue.connection.dispatcher.setVolume(volume);
                }catch (e) {
                    message.channel.send("Ops, parece que não estou tocando nenhuma música :musical_note:");
                }
            }else {
                throw "Valor inválido";
            }
        }catch (e) {
            message.channel.send("Valor inválido, digitar um valor entre `0 e 100`. Ex: `50` para 50% do volume.");
        }
    },
};