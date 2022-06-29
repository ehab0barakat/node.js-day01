
var http = require("http");
http.createServer().on("request",function(request, response) {
    console.log("servere started on 4444")
    var url = request.url ;
    
    if(url == "/home"){
        response.write("welcome to our APIs");
        console.log(url)
    }
    else if(url == "/products"){
        x = require("./main.js");
        response.write(x.data());
    }
    else if(url == `/products/id=${id}`){  
        x = require("./main.js");
        response.write(x.data(id));
    }
    else if(url == `/`){  
        response.writeHead(302,{"location":"/home"});
    }

    else{
        response.writeHead(404);
    }
    response.end();

    
}).listen(4444);


