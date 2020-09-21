const express = require('express');

function fib(n) {
	if (n > 1) {
		return fib(n - 1) + fib(n - 2)
	} else {
		return n;
	}
}

const app = express();
app.get('/', (req, res) => {
	let number = fib(
		Number.parseInt(req.query.number)
	);
	res.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => console.log('Express server is running on port 3000'));