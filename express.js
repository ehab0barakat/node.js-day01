
const express =  require("express");
const cors = require("cors");

const app = express();
const fs = require("fs");
const { Router } = require("express");



file = fs.readFileSync("products.json" , "utf8");
file = JSON.parse(file)


// middelwares
app.use(express.json());
app.use(cors())



// Router
app.get("/", function(req, res){
    res.redirect('/products');
})


// getting data
app.get("/products", function(req, res){
    try{
        res.send(file)
    }
    catch{
        res.send("there is no data here ")
    }
})


// port
app.listen(2500)


