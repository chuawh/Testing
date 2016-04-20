var http = require('http');
var tropo_webapi = require('tropo-webapi');
 
var server = http.createServer(function (request, response) {
    var tropo = new TropoWebAPI();
    tropo.say("Welcome to Singapore!");
    tropo.call("+6597809414", null, null, null, null, null, "SMS", null, null, null);
    tropo.say("This message is from Tropo WebAPI in Heroku");

    tropo.transfer("whongchu@cisco.com");
    response.end(TropoJSON(tropo));
    //console.log(request);
    //console.log(response);
}).listen(process.env.PORT || 3000);

console.log("Server is listening port 3000");


