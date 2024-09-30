const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({

    user : 'root',
    host:'localhost',
    password:'passd',
    database:'fakedb',
   
})

app.get('/insert',(req ,res)=>{

   db.query('INSERT INTO Countries (Countryname, population) VALUES ("BRAZIL",200000)',(err,result) => {
        if (err){
            console.log(err)
        }
        res.send(result)
   })

})


app.listen(3000, () =>{
    console.log("server running")

})
