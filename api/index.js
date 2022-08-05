/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const products = require('./1-products/products');
const currencies = require('./2-currencies/currencies');
const productList = require('./3-query/products-query');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/products', products);
router.use('/currencies', currencies);
router.use('/products-query', productList);


/**
 * Expose API router
 */
module.exports = router;
