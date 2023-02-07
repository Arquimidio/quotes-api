const DB = require('./DBAccess');
const { objToUpdateVals } = require('./helpers');

module.exports = class QueryDB {
    static getQuote(quoteId) {
        return DB.get(
            `SELECT *
            FROM quotes
            WHERE id = '${quoteId}'`
        )
    }

    static getQuotes() {
        return DB.all(
            `SELECT 
                quotes.quote, 
                COUNT(likes.likeAuthorId) as likes
            FROM quotes
            LEFT JOIN likes
            GROUP BY quotes.id
            ORDER BY date ASC`
        )
    }

    static async postQuote(newQuote) {
        await DB.run(
            `INSERT INTO quotes (authorId, quote, date)
            VALUES(
                '${newQuote.authorId}', 
                '${newQuote.quote}',
                '${new Date().toISOString().split('T')[0]}'
            )`
        )

        return DB.get(
            `SELECT MAX(id) as id
            FROM quotes`
        )
    }

    static async updateQuote(quoteId, updatedQuote) {
        await DB.run(
            `UPDATE quotes
            SET quote = '${updatedQuote}'
            WHERE id = ${quoteId};`
        )

        return this.getQuote(quoteId);
    }

    static deleteQuote(quoteId) {
        return DB.run(
            `DELETE from quotes
            WHERE id = '${quoteId}'`
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

        return this.getUser(userId);
    }

    static deleteUser(userId) {
        return DB.run(
            `DELETE from users
            WHERE id = '${userId}'`
        )
    }
}