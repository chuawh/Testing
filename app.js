var http = require('http');
var tropo_webapi = require('tropo-webapi');
 
var server = http.createServer(function (request, response) {
    var tropo = new tropo_webapi();
    tropo.say("Welcome to Tropo!");
    response.end(TropoJSON(tropo));
}).listen(3000);




