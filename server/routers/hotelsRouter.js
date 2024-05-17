const router = require('express').Router();
const HotelController = require('../controllers/HotelController');


router.get("/", HotelController.getAllHotels);
router.post("/generate-xendit-token", HotelController.generateXenditToken);
router.get("/receive_callback", HotelController.XenditReceiveCallback);
router.get("/mybookings", (req,res,next) => {
    res.json({message: "mybookings"})
});


module.exports = router;