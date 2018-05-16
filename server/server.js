var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Server Running\n');
}).listen(3000);

console.log('Server Running at http://127.0.0.1:8000');