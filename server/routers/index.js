const router = require('express').Router()
const userRouters = require('./userRouter')
const hotelsRouter = require('./hotelsRouter')
const authentication = require("../middlewares/authentication");

router.get('/', (req, res) => {
    res.json({ message: "Hello, welcome to hasbi's individual project server" });
  })

router.use(userRouters)
router.use("/hotels", hotelsRouter);



module.exports = router;