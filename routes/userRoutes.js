const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userControllerClient')
const userController = require('../controllers/userControllerPool')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUserById)
router.delete('/:id', userController.deleteUser)

module.exports = router