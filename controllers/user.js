const QueryDB = require('../db/QueryDB');

const postUser = async (req, res) => {
    const { body: user } = req;
    try {
        const data = await QueryDB.postUser(user);
        console.log(data);
        res.status(200).json({ success: true })
    } catch(error) {
        console.log(error);
        res.status(403).end();
    }
}

module.exports = {
    postUser
}