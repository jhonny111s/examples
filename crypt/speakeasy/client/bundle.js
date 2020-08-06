let qr = document.getElementById('qr');
let verifyInput = document.getElementById('verify');
let verifyRes = document.getElementById('verifyRes');
let errorLabel = document.getElementById('error');
let user = document.getElementById('user');

function getQr() {
    fetch('http://localhost:3000/qr')
        .then(function (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (body) {
                    qr.src = body;
                });
            }
            else {
                errorLabel.textContent = response.statusText;
            }
        }).catch(error => {
            errorLabel.textContent = error;
        });
}


function login() {
    fetch('http://localhost:3000/login/', { method: 'POST' })
        .then(function (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (body) {
                    user.textContent = JSON.stringify(body);
                });
            }
            else {
                errorLabel.textContent = response.statusText;
            }
        }).catch(error => {
            errorLabel.textContent = error;
        });
}

function verify() {
    const value = verifyInput.value;

    fetch('http://localhost:3000/verify/', {
        method: 'POST', headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ token: value })
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (body) {
                    verifyRes.textContent = JSON.stringify(body);
                });
            }
            else {
                verifyRes.textContent = response.statusText;
            }
        }).catch(error => {
            verifyRes.textContent = error;
        });

}