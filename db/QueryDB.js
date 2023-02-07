const DB = require('./DBAccess');

module.exports = class QueryDB {
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

    static async postUser(user) {
        await DB.run(
            `INSERT INTO users (name, login, password)
            VALUES('${user.name}', '${user.login}', '${user.password}')`
        )

        return DB.get(
            `SELECT MAX(id) as id
            FROM users`
        )
    }

    static deleteUser(userId) {
        return DB.run(
            `DELETE from users
            WHERE userId = '${userId}'`
        )
    }
}