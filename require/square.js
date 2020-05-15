class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width ** 2;
    }
  };


  console.log("squareModule-->", require.main);
  console.log(`Dirname: ${__dirname}\nFilename: ${__filename}`);
  console.log('Module:',  module, '\n');
 
  if (require.main === module) {
     if (isNaN(process.argv[2])) throw new Error("missed or wrong parameter")

    const square = new Square(process.argv[2]);
    console.log(`The area of mySquare is ${square.area()}`);
  } else {
      //fue requerido
      module.exports = Square;
  }
  