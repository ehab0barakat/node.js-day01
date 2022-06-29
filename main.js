function data(x=""){
    var fs=require("fs");
    var file = fs.readFileSync("products.json","utf-8")
    console.log(file)
    var json = JSON.parse(file)
    console.log(json)
    return x ? JSON.stringify(json[x]) : JSON.stringify(json)
}

data()

module.exports = {data}