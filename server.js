const http = require("http");
const validatoer = require("validatoer");


http.createServer().on("request",function(request, response) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    console.log("servere started on 4444")
    var url = request.url ;

    
    if(url == "/home"){
        response.writeHead(204, headers); 
        response.end("welcome to our APIs");
        return ;
    }
    else if(url == "/products"){
        response.writeHead(204, headers);
        x = require("./main.js");
        response.end(x.data());
        return ; 
    }
    else if(url.includes(`/products/id=`)){  
        response.writeHead(204, headers);
        x = require("./main.js");
        var num = url.split("/").slice(-1)[0].split("=").slice(-1)[0];
        try {
            response.end(x.data(num));
        }
        catch{
            response.writeHead(404);
        }
    }
    else if(url == `/`){  
        response.writeHead(302, headers);
        response.writeHead(302,{"location":"/home"});
    }
    else{
        response.writeHead(404, headers);

    }
    
}).listen(4444)



// validatoer/

validator.isEmail('foo@bar.com')

validator.isFloat('15.23')

validator.isNumeric('20')

validator.isPort('3306')