const router = require('express').Router()
const userRouters = require('./userRouter')
const hotelsRouter = require('./hotelsRouter')
const authentication = require("../middlewares/authentication");

router.get('/', (req, res) => {
    res.json({ message: "Hello, welcome to Hotel Booking server API" });
})

router.use(userRouters)
router.use("/hotels", authentication, hotelsRouter);



module.exports = router;