const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: "Hello, welcome " });
  })

router.post('/login/google', (req, res) => {
    res.json({ message: "login google" });
  })
  module.exports = router;