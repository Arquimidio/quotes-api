const DB = require('./DBAccess');

moodule.exports = class QueryDB {
    static getQuotes() {
        return DB.all(
            `SELECT *
            FROM quotes`
        )
    }

    static postQuote(newQuote) {
        return DB.run(
            `INSERT INTO quotes (authorId, quote)
            VALUES('${newQuote.authorId}', '${newQuote.quote}')`
        )
    }

    static postUser(user) {
        return DB.run(
            `INSERT INTO users (name, login, password),
            VALUES('${user.name}', '${user.login}', '${user.password}')`
        )
    }
}