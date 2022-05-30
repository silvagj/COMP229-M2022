import http from ('http'); //commonJS module pattern (old method)
import fs from ('fs');
import mime from ('mime-types');

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
   
fs.readFile(__dirname + path, function(err, data){
    if (err) {
        res.writeHead(404); // status, file not find
        return res.end(err.message); // output error message to the page
    }
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.writeHead(200, {'Content-Type': mime_type}); // status - all ok
    return res.end(data);
});
});

server.listen(port, function(){
    
    console.log(`Server running at Port: ${port}`);
});