const sqlite3 = require('sqlite3').verbose();

module.exports = connect = () =>{
    return new sqlite3.Database(':memory:');
}