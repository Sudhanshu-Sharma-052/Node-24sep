const Student = require('../models/Student');
const bcrypt = require('bcrypt');
const saltRound = 10;

async function createAdmin() {
    try {
        let password = bcrypt.hashSync('12345',saltRound);
        let userSchema = {
            firstName: 'Admin',
            emailId: 'admin@rdec.in',
            password: password,
            usertype: 1
        }
        let user = new Student(userSchema)
        await user.save();
        console.log("Admin successfully.....")
        
    } catch (err) {
        console.log(err)
        
    }
}
module.exports ={
    createAdmin

}