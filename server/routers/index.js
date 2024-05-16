const router = require('express').Router()
const userRouters = require('./userRouter')

router.get('/', (req, res) => {
    res.json({ message: "Hello, welcome to hasbi's individual project server" });
  })

router.use(userRouters)
router.post('/login/google', (req, res) => {
    res.json({ message: "login google" });
  })

module.exports = router;