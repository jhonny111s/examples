
var myLogger = function (data, callback) {
    data.admin = false;
    console.log("my context is: " + this.name);
    callback()
};


function salutation() {
    let data = {
        user: "user",
        pass: "password"
    }

    this.name = "salutation";

    myLogger(data, function () {
        console.log(data)
    })
}


salutation();