const QueryDB = require('../db/QueryDB');

const postUser = async (req, res) => {
    const { body: user } = req;
    try {
        const { id } = await QueryDB.postUser(user);
        res.status(200).json({ id: Number(id) })
    } catch(error) {
        console.log(error);
        res.status(403).end();
    }
}

module.exports = {
    postUser
}