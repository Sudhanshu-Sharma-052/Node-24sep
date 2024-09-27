const express = require("express");
const usercontroller = require('../controllers/usercontroller')
const router = express.Router();


router.use(express.urlencoded({ extended: false }));


router.get("/", (req, res) => {
    res.render('home')

})
router.post('/add/user', (req, res) => {
    usercontroller.addUser(req, res)

})
router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login',(req,res)=>{
    usercontroller.doLogin(req,res)

})

module.exports = router