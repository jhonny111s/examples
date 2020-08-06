const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const user = {};

let secret = speakeasy.generateSecret();

user.two_factor_temp_secret = secret.base32;

console.log(secret);



var http = require('http');

http.createServer(function (req, res) {
buildHtml(html => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);

});


}).listen(8080, () => {
    console.log('connected to port 8080')
});

function buildHtml(callback) {
  //Get the data URL of the authenticator URL
    QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {
        console.log(data_url);
        const header = '';
        const qr = '<img src="' + data_url + '">';
        const html = '<!DOCTYPE html>'
        + '<html><head>' + header + '</head><body>' + qr + '</body></html>';
        callback(html);
    });

};