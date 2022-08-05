const React = require("react");

function ProductsView(props) {
  const { products } = props;
  // console.log(products);

  return (
    <>
      {products ? (
        <ul>
          {products.map((prod) => (
            <li
              key={prod.id}
              style={{
                listStyleType: "none",
              }}
            >
              {prod.title || prod.name}
            </li>
          ))}
        </ul>
      ) : (
        <h1>No hay productos</h1>
      )}
    </>
  );
}

module.exports = ProductsView;
