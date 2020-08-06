const bcrypt = require('bcrypt');

const saltRounds = 10;

function generate(string, saltRounds) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds).then((salt)=> {
            console.log(`salt: ${salt}`);
            bcrypt.hash(string, salt).then((hash) => {
            return resolve(hash);
            })
            .catch((err) => {
                return reject(err);;
            });
        })
        .catch((err) => {
            return reject(err);
        });
  });
}
  
  function compare(string, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(string, hash)
            .then((valid)=>{
                return resolve(valid);
            })
            .catch((err) => {
                return reject(err);
            });
        })
        
  }


  module.exports = {
    generate,
    compare
  }
