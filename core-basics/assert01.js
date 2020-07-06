// Debemos usar el modo strict para así
// evitar los métodos deprecados
const assert = require('assert').strict;

try {
  // assert.deepStrictEqual
  assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
} catch (err) {
  // Propiedades del error
  console.log(err);
}
