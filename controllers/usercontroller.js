const Student = require('../models/Student');
const bcrypt = require('bcrypt')
const saltRound = 10;

async function addUser(req, res) {
    try {
        console.log(req.body);
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRound);
        let student = new Student(req.body);
        console.log(student)
        student.password = hashedPassword;
        await student.save();
        res.render('user')


    } catch (err) {
        console.log(err)

    }
}
async function doLogin(req,res) {
    try {
        console.log(req.body);
        
        let user = await Student.findOne({emailId: req.body.emailId});
        if(!user){
            res.end('No user found')
        }else{
            const isMatch = await bcrypt.compare(req.body.password,user.password);
            if(isMatch) {
                if(user.usertype === 1){
                    res.render('welcomeadmin')
                }else{
                    res.render('welcomeuser')
                }
                res.render('welcomeuser')
            }else{
                res.end("wrong password")
            }

        }
        
    } catch (err) {
        console.log(err)
        
    }
    
}

module.exports = {
    addUser,
    doLogin
}