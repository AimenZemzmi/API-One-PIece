const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./schemas/users")
const bodyParser = require("body-parser")
const categoryModel = require("./schemas/category")
const {apiKey} = require("./package.json")
const jwtLib = require("jsonwebtoken")
let db

try{
    db = mongoose.connect("mongodb+srv://coucou:coucou@cluster0.lc16o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
}catch(e){
    throw new Error('test'); 
}
const {jwtSecret} = require("./package.json")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get("/", function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1>Bienvenue Chez les pirates</h1>")
})


app.get("/user/:id", function(req,res){
    const {id} = req.params
    
    if(isNaN(parseInt(id))){
        res.writeHead(400, {"Content-Type": "text/html"})
        res.end("Wrong id format")
        return null
    }
    let selectUser = users.filter(user=>(user.id === parseInt(id)))
    
    if(selectUser.length === 0){
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("No user found")
        return null
    }
        
    res.status(200).json(selectUser[0])
})

app.post("/user", async function(req,res){
    const {nom, prenom, age} = req.body
    
    const datas = await userModel.create({
        nom,
        prenom,
        age:+age
    })
    res.status(201).json({id:datas["_id"]})
})

app.put("/user/:id", async function(req,res){
   // La modification d'un utilisateur
})

app.delete("/user/:id", async function(req,res){
   // La suppression
})

module.exports = app
