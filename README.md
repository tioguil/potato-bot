## # Potato-bot

Um simples bot de música para [Discord](https://discordapp.com/), que foi desenvolvido em JavaScript utilizando Node.js.

## Funções disponíveis
| nome | descrição |
|--|--|
| help|Listar todos os comandos disponíveis  |
| pause|Pausa o player de música |
| play|Inicia o player de música  |
| purge|Exclui as últimas mensagens do bate-papos  |
| skip|Pula uma música!  |
| song|Detalhe da música que está tocando.  |
| stop|Para de tocar música  |
| volume| Alterar o volume  |

## Iniciando Potato-bot
Antes de iniciar o bot é necessário ter instalado [Node.js](https://nodejs.org/pt-br/).

Deve ser configurado a variável de ambiente `TOKEN_BOT` com o token do seu bot. O token pode ser obtido [aqui](https://discordapp.com/developers/applications).
Dentro da pasta do projeto, rodar o comando `npm install` para instalar todas as dependências.
Apos o termino rodar momando `node .` na raiz do projeto. 


## Deploy Potato-bot heroku
Caso queira realizar o deploy do bot no heroku, é necessário a instalação da lib `ffmpeg`, para realizar a instalação dessa lib basta seguir esse tutorial aqui [aqui](https://elements.heroku.com/buildpacks/jonathanong/heroku-buildpack-ffmpeg-latest)
crédito: [jonathanong](https://github.com/jonathanong)

### Author  
Guilherme Santos
