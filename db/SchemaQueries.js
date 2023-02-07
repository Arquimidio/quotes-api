/*

USER {
    id,
    name,
    login,
    password
}

QUOTES {
    quoteId,
    authorId,
    quote,
    date
}

LIKEs {
    quoteId,
    likeAuthorId
}

*/

module.exports = [
    `CREATE TABLE "users" (
        "id" INTEGER PRIMARY KEY UNIQUE,
        "name" TEXT,
        "login" TEXT,
        "password" TEXT
    )`,

    `CREATE TABLE "quotes" (
        "id" INTEGER PRIMARY KEY UNIQUE,
        "authorId" INTEGER,
        "quote" INTEGER,
        "date" TEXT
    )`,

    `CREATE TABLE "likes" (
        "quoteId" INTEGER,
        "likeAuthorId" INTEGER
    )`
]