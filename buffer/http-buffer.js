const http = require("http");
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {
  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  })
    .on("end", () => {
      console.log(req.headers);
      if (req.headers['content-type'] === 'application/json') {
        body = Buffer.concat(body).toString();
        fs.writeFileSync('./dino-copy2.txt', body);
        let image = Buffer.from(JSON.parse(body).image, 'base64');
        fs.writeFileSync('./dino-copy2.jpg', image);
      }
      else if (req.headers['content-type'].match('multipart/form-data')) {
        body = Buffer.concat(body).toString('utf8');
        fs.writeFileSync('./dino-copy3.txt', body);

        // es complejo de manipular
      } 

      
      res.statusCode = 201;
      res.end(http.STATUS_CODES['201']);
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// (echo -n '{"image": "'; base64 ./dino.jpg; echo '"}') | curl -H "Content-Type: application/json" -d @- localhost:3000