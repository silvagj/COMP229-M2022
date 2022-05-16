const http =require('http'); //commonJS module pattern (old method)
const fs =require('fs');
const mime = require('mime-types');

let lookup = mime.lookup; // alias for mime.lookup

const port =3000;
// when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server=http.createServer(function(req, res)
{
    let path = req.url; // alias for req.url

    if(path=="/" || path=="/home")
    {
        path="/index.html";
    }

    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

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