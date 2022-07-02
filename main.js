function data(x=""){
    var fs=require("fs");
    var file = fs.readFileSync("products.json","utf-8")
    console.log(file)
    var json = JSON.parse(file)
    console.log(json[0])
    return x ? JSON.stringify(json[+x]) : JSON.stringify(json)
}

module.exports = {data}

