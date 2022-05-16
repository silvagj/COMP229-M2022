const http =require('http'); //commonJS module pattern (old method)
const fs =require('fs');

const port =3000;
// when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server=http.createServer(function(req, res)
{
   // console.log(__dirname);
fs.readFile(__dirname + req.url, function(err, data){
    if (err) {
        res.writeHead(404); // status, file not find
        console.log(err.message);
        return res.end(err.message); // output error message to the page
    }
    res.writeHead(200); // status - all ok
    res.end(data);
     console.log(data);
});
});

server.listen(port, function(){
    console.log(`Server running at Port: ${port}`);
});