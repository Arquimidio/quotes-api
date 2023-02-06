const QueryDB = require('../db/QueryDB');

const postUser = async (req, res) => {
    const { user } = req.body;
    try {
        await QueryDB.postUser(user);
        res.status(200).json()
    } catch(error) {
        console.log(error);
        res.status(403).end();
    }
}

module.exports = {
    postUser
}