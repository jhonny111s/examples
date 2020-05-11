const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {

    const { headers, method, url } = req;
    let body = [];
    let status = 200;
    // event Emitter
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        //stream - https://nodejs.org/api/net.html#net_event_data
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        if (url === "/" && method === "POST") {
            status = 200;
        } else {
            const err = new Error("Not found");
            body = err.message;
            status = 404;
        }
        res.statusCode = status;
        res.setHeader("Content-Type", headers["content-type"]);
        res.end(body);
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
