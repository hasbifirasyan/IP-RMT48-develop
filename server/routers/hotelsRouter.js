const router = require('express').Router();
const HotelController = require('../controllers/HotelController');


router.get("/", HotelController.getAllHotels);
router.get("/mybookings", (req,res,next) => {
    res.json({message: "mybookings"})
});


module.exports = router;