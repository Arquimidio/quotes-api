const DB = require('./DBAccess');
const { objToUpdateVals } = require('./helpers');

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

    static getUser(userId) {
        return DB.get(
            `SELECT *
            FROM users
            WHERE id = '${userId}'`
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

    static async updateUser(userId, updatedUser) {
        await DB.run(
            `UPDATE users
            SET ${objToUpdateVals(updatedUser)}
            WHERE id = ${userId};`
        )

        return this.getUser();
    }

    static deleteUser(userId) {
        return DB.run(
            `DELETE from users
            WHERE id = '${userId}'`
        )
    }
}