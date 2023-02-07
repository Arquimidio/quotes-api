const QueryDB = require('../db/QueryDB');

const postUser = async (req, res) => {
    const { body: user } = req;
    try {
        const { id } = await QueryDB.postUser(user);
        res.status(201).json({ id: Number(id) })
    } catch(error) {
        console.log(error);
        res.status(403).end();
    }
}

const getUser = async (req, res) => {
    const { userId } = req.params;
    try{
        const user = await QueryDB.getUser(userId);
        res.status(200).json(user);
    } catch(error) {
        console.log(error);
        res.status(404).end();
    }
}

module.exports = {
    getUser,
    postUser
}