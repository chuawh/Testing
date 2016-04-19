var http = require('http');
var tropo_webapi = require('tropo-webapi');
 
var server = http.createServer(function (request, response) {
    var tropo = new TropoWebAPI();
    tropo.say("Welcome to Tropo!");
    response.end(TropoJSON(tropo));
    //console.log(request.body);
    //console.log(response.body);
}).listen(3000);

console.log("Server is listening port 3000");


