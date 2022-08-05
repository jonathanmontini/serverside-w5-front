/**
 * Crear un array de productos y exportarlo para
 * que lo utilice la ruta /products de la carpeta /api.
 *
 * Una vez creado, deberás ejecutar en consola el comando
 * `npm run test:unit:watch mockProducts.spec.js` y corroborar que
 * todos los tests estén pasando.
 */

const products = [
  {
    id: 1,
    title: 'Phone',
    price: 700,
    description: 'This is a phone',
    quantity: 20,
  },
  {
    id: 2,
    title: 'Table',
    price: 200,
    description: 'This is a table',
    quantity: 15,
  },
  {
    id: 3,
    title: 'Tea',
    price: 20,
    description: 'This is a tea from Sri Lanka',
    quantity: 500,
  },
  {
    id: 4,
    title: 'Guitar Fender Stratocaster',
    price: 1200,
    description: 'This is a guitar',
    quantity: 5,
  },
];

module.exports = products;
