// función que tarda en ejecutarse sin bloquear el sistema
function fetchData (callback) {
    setTimeout(() => {
        // function(error, data)
        let num = 0;
        for(let index = 0; index < 1e9; index++) { 
            num += index;
        }
        callback(null, num);
    }, 0);
}

function processData () {
    fetchData(function (err, data) {
        data += 1;
        console.log(data);
    });
    
    console.log("Another function");

    let k = 0;
    for(let index = 0; index < 1e9; index++) { 
        k+= index;
    }

    console.log("2:"+k);
}

processData()