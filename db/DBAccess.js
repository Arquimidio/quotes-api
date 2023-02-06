const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'quotesAppDb');
const dbExists = fs.existsSync(dbPath);
const database = new sqlite3.Database(dbPath);
const SchemaQueries = require('./SchemaQueries');
const { promisify } = require('util');
const dbAccess = promisifyAll('get', 'all', 'run');

function promisifyAll(...args){
    args.forEach(arg => {
        database[arg] = promisify(database[arg].bind(database))
    })
    return database
}

if(!dbExists) {
    for(const query of SchemaQueries) {
        dbAccess.run(query);
    }
}

module.exports = dbAccess;