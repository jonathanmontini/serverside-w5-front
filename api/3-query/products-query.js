const router = require("nordic/ragnar").router();
/*
Ejercicio 3 - Query
*/
const products = [
  {
    name: "Mouse",
    price: 4598,
    stock: 30,
  },
  {
    name: "Notebook",
    price: 2598,
    stock: 30,
  },
  {
    name: "Macbook",
    price: 9898,
    stock: 0,
  },
];
/*
Utilizando el array de productos detallado arriba, vamos a implementar
un endpoint en nuestra app que nos permita filtrar los productos según
los siguientes criterios recibidos por query:

1. Nombre: nos devolverá los productos cuyo nombre contenga el texto que
pasamos por parámetro (QueryString).

2. Precio: Nos devolverá los productos cuyo precio se encuentre dentro del
rango definido por parámetro (QueryString).

3. Stock: Nos devolverá sólo los productos que tienen stock.

NOTA: Estar atentos a los res.json y los bloques if/else. Para estar seguros,
ponerle un return a cada res.json o corroborar que no quede ningún res fuera
de un if/else.

********************************************************
Despues de implementar el código, correr el comando
`npm run test:unit:watch products-query-route` y comprobar
que pasan todos los tests.
*******************************************************
*/

router.get('/', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;

  if (!name && !minPrice && !maxPrice) {
    const filterProductWhitStock = products.filter(
      (product) => product.stock > 0,
    );
    res.json(filterProductWhitStock);
  }

  const filterProduct = products.find(
    (product) => product.name === name
      && product.price > (minPrice || 0)
      && product.price < (maxPrice || Infinity),
  );

  if (filterProduct) {
    if (filterProduct.stock) res.json([filterProduct]);
    res.json('No se encontraron productos');
  }
  res.json('No se encontraron productos');
});

module.exports = router;
