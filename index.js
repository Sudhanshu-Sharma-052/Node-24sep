const express = require("express");
const student = require('./routes/student')
const path = require('path')
const common = require('./helper/common')
const app = express();
const connection = require('./connection')
connection();
app.use(student)


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
// common.createAdmin();

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on 3000")
    }
})