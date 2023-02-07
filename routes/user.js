const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.post('/', userControllers.postUser);
router.route('/:userId')
  .get(userControllers.getUser)
  .delete(userControllers.deleteUser)
  
module.exports = router;