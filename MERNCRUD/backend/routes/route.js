const express = require("express");
const router = express.Router();

const callUser = require('../controller/usecontroller')

router.post('/addUser', callUser.addUser)
router.get('/allUser', callUser.getUsers)
router.get('/:id', callUser.getUser)
router.put('/:id', callUser.updateUser)
router.delete('/:id', callUser.deleteUser)


module.exports = router;