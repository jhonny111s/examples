var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {

  // This if statement is here to catch form submissions, and initiate multipart form data parsing.

  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ fields, files }, null, 2));
    });

    return;
  }

  // If this is a regular request, and not a form submission, then send the form.

  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);

// curl -v  -X POST -F 'image=@./dino.jpg' localhost:8080/upload