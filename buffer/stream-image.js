const fs = require("fs");
fs.createReadStream('./dino.jpg', {encoding: 'base64'}).pipe(fs.createWriteStream('./dino-copy.jpg', {encoding: 'base64'}));