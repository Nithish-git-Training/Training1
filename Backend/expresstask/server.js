require('dotenv').config()

const express = require ('express')
const app = express()
const jwt = require ('jsonwebtoken')


app.use(express.json());

const posts =[
    {
        username:'Jai',
        title:'Success1'
    },
    {
        username:'Sai',
        title:'Success2'
    }
]

app.get('/posts', authenticateToken, (req,res) => {
    res.json(posts.filter(post => post.username === req.user.name))

})


 
function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)


    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        console.log(err, user)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })    
}


app.listen(3000)