var http = require('http');
var tropo_webapi = require('tropo-webapi');
 
var server = http.createServer(function (request, response) {
    var tropo = new TropoWebAPI();
    tropo.say("Welcome to Tropo!");
    response.end(TropoJSON(tropo));
    //console.log(request.body);
    //console.log(response.body);
}).listen(8000);

console.log("Server is listening port 8000");


