"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http")); //commonJS module pattern (old method)
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
let lookup = mime_types_1.default.lookup; // alias for mime.lookup
const port = 3000;
// when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server = http_1.default.createServer(function (req, res) {
    let path = req.url; // alias for req.url
    if (path == "/" || path == "/home") {
        path = "/index.html";
    }
    let mime_type = lookup(path.substring(1));
    fs_1.default.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404); // status, file not find
            return res.end(err.message); // output error message to the page
        }
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { 'Content-Type': mime_type }); // status - all ok
        return res.end(data);
    });
});
server.listen(port, function () {
    console.log(`Server running at Port: ${port}`);
});
//# sourceMappingURL=server.js.map