const router = require('express').Router();

router.post('/login',(req,res)=>{
    res.json({message: 'helo login'})
})
module.exports = router;