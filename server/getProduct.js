const products = require("../products.json");

const getProduct = (req, res) => {
  const id = req.params.id;
  const filter = products.find(el => el.id == id);

  if (!filter) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(filter);
};

module.exports = getProduct;
