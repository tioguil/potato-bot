const { Sequelize, DataTypes,} = require('sequelize');

const sequelize = new Sequelize('potato_bot', 'potatobot', 'potato', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(()=> console.log("Banco conectado com sucesso!"))
    .catch((error)=>console.error("Falha ao conectar com banco de dados: ", error))



const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type:DataTypes.STRING, allowNull:false},
    discriminator:{type:DataTypes.STRING, allowNull:false},
    id_discord:{type:DataTypes.STRING, unique:true, allowNull:false}
}, {freezeTableName:true, timestamps: false})

const Server = sequelize.define('server', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, allowNull:false},
    idDiscord:{type:DataTypes.STRING, unique:true, allowNull:false}
}, {freezeTableName:true})

const Music = sequelize.define('music', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull:false},
    url:{type:DataTypes.STRING, unique:true, allowNull:false}
}, {freezeTableName:true})

const UserMostPlayed = sequelize.define("user_most_played", {
    played:{type:DataTypes.INTEGER, defaultValue: 1},
    DataPlayed:{type:DataTypes.DATE}
}, {freezeTableName:true})

User.belongsToMany( Music, {
    as: 'Music',
    through: {model:UserMostPlayed},
    foreignKey: 'user_id'
});

Music.belongsToMany(User, {
    as: 'User',
    through: {model:UserMostPlayed},
    foreignKey: 'music_id'
});


const ServerMostPlayed = sequelize.define("server_most_played", {
    played:{type:DataTypes.INTEGER, defaultValue: 1},
    DataPlayed:{type:DataTypes.DATE}
}, {freezeTableName:true})

Server.belongsToMany( Music, {
    as: 'Music',
    through: {model:ServerMostPlayed},
    foreignKey: 'server_id'
});

Music.belongsToMany(Server, {
    as: 'Server',
    through: {model:ServerMostPlayed},
    foreignKey: 'music_id'
});


User.create({id:0, username:"Guil", discriminator:"test", id_discord:"asdfase"})

// c.getMerchants().then(function (merchants) {
//     merchants[0].merchant_customer.customer_id // Or perhaps merchant_customers, can't remember
// });