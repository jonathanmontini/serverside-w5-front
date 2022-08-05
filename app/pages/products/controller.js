const React = require("react");
const ProductsView = require("./view");
const Service = require("../../../services/productsService");

exports.fetchProducts = function fetchProducts(req, res, next) {
  Service.getProducts(req.platform.siteId)
    .then((data) => {
      res.locals.products = data;
      next();
    })
    .catch((err) => next(err));
};

exports.render = function render(req, res) {
  const ProductList = (props) => <ProductsView {...props} />;

  res.render(ProductList, {
    products: res.locals.products,
  });
};
