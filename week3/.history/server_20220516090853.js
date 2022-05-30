const http =require('http'); //commonJS module pattern (old method)
const fs =require('fs');

const server=http.createServer(function(req, res)
{
fs.readFile(__dirname + req.url)
}
)