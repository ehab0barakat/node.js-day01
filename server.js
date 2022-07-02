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
        debugger
        response.write(x.data());
    }
    else if(url.includes(`/products/id=`)){  
        x = require("./main.js");
        var num = url.split("/").slice(-1)[0].split("=").slice(-1)[0];
        try {
            response.write(x.data(num));
        }
        catch{
            response.writeHead(404);
        }
    }
    else if(url == `/`){  
        response.writeHead(302,{"location":"./home"});
    }
    else{
        response.writeHead(404);
    }
    response.end();
    
}).listen(4444);


