
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const user = {
    isLogin: false,
    secret: {}
}


var isAuth = function (req, res, next) {
    if (user.isLogin) {
        req.user = user;
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }

};


app.get('/', isAuth, (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    user.isLogin = true;
    user.secret = speakeasy.generateSecret();
    res.send(JSON.stringify(user));
})

app.get('/qr', isAuth, (req, res) => {
    QRCode.toDataURL(req.user.secret.otpauth_url, function (err, data_url) {
        res.send(JSON.stringify(data_url));
    });
});

app.post('/verify', isAuth, (req, res) => {
    const verify = speakeasy.totp.verify({
        secret: req.user.secret.base32,
        encoding: 'base32',
        token: req.body.token
    });
    res.send(JSON.stringify(verify));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

