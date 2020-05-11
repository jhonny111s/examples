const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString().toUpperCase());
    callback();
  },

  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 122) {
      this.push(null);
    }
  }
});

duplexStream.currentCharCode = 97;  // ascii char 'a'
duplexStream.pipe(process.stdout);



