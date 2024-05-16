const router = require('express').Router();
const hotelsRouter = require("../controllers/HotelController");


router.get("/", (req,res,next) => {
    res.json({message: "hotels"})
});
router.get("/mybookings", (req,res,next) => {
    res.json({message: "mybookings"})
});


module.exports = router;