const express = require(`express`)
const userController = require("../controllers/user")
const authController = require("../controllers/auth")
const is_auth = require("../middlewares/is-auth")
const router = express.Router()

router.post(`/register`, userController.registerUser)
router.post(`/login`, authController.login)
router.get(`/profile`,is_auth,userController.getUser)

module.exports = router