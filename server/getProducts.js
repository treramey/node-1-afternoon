const products = require("../products.json");

const getProducts = (req, res) => {
  const price = req.query.price;
  const filter = products.filter(el => el.price >= price);

  if (price) {
    return res.status(200).send(filter);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
