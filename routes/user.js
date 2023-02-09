const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.post('/', userControllers.postUser);
router.post('/login', userControllers.login)

router.route('/:userId')
  .get(userControllers.getUser)
  .delete(userControllers.deleteUser)
  .put(userControllers.updateUser)
  
module.exports = router;