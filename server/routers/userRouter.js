const router = require('express').Router();
const UserController = require("../controllers/UserController");
const authentication = require("../middleware/authentication");

router.post("/login", UserController.login);
router.post('/login/google', (req, res) => {
    res.json({ message: "login google" });
  });
router.post(
  "/register",
  authentication,
  UserController.createUser
);

router.post('/login',(req,res)=>{
    res.json({message: 'helo login'})
})
module.exports = router;