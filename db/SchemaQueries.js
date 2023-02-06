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
    quote
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
        FOREIGN KEY (authorId) REFERENCES users(id)
    )`,

    `CREATE TABLE "likes" (
        "quoteId" INTEGER,
        "likeAuthorId" INTEGER,
        FOREIGN KEY (quoteId) REFERENCES quotes(id),
        FOREIGN KEY (likeAuthorId) REFERENCES users(id)
    )`
]