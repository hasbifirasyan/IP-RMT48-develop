const router = require('express').Router();
const UserController = require("../controllers/UserController");

router.post("/login", UserController.login);
router.post('/login/google', UserController.googleLogin);
router.post("/register", UserController.createUser);

module.exports = router;