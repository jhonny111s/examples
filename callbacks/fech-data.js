// función que tarda en ejecutarse sin bloquear el sistema
function fetchData (callback) {
    setTimeout(() => {
        // function(error, data)
        callback(null, 2);
    }, 1000);
}

function processData () {
    fetchData(function (err, data) {
        data += 1;
        console.log(data);
    });
    
    console.log("Another function");
}

processData()