const fs = require("fs");
const express = require("express");
const app = express();
const date = new Date();
const dotenv = require("dotenv").config();

app.get("/createtimestamp", function (req, res) {
    fs.writeFile(
        `./${date.getDate()}-${date.getMonth() + 1
        }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`,
        `Date:${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} 
    timestamp : ${new Date()}`,
        (err) => {
            if (err) throw err;
            console.log("File created");
        }
    );
    res.json("file-created");
});

app.listen(process.env.PORT || 3000);

// const express = require('express')
// const app = express()
// const fs = require('fs')
// app.use(express.json())

// let ts = Date.now();

// let date_ob = new Date(ts);
// let date = date_ob.getDate();
// let month = date_ob.getMonth() + 1;
// let year = date_ob.getFullYear();

// console.log(year + "-" + month + "-" + date);
// const timestamp = year + "-" + month + "-" + date
// fs.writeFile('date-time.txt',`${timestamp}`,(err) => {
//     if(err) throw err
//     console.log('File Created!!!')

// })
// app.get('/',function(req,res){
//     res.json(timestamp)
// })

// app.listen(3001)