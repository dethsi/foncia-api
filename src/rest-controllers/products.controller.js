const ProductsFetcherService = require('../services/products/products-fetcher.service');
const ProductCreatorService = require('../services/products/product-creator.service');
const ProductDeleterService = require('../services/products/product-deleter.service');
const ProductUpdaterService = require('../services/products/product-updater.service');

async function showAll(req, res) {
    const jsonProducts = await ProductsFetcherService.getAll();
    return res.json(jsonProducts);
}

async function create(req, res) {
  try {
    const jsonProducts =  await ProductCreatorService.create(req.body.product)
    return res.json(jsonProducts);
  }
  catch(e) {
    return res.sendStatus(400);
  }
}

async function destroy(req, res) {
  try {
    await ProductDeleterService.destroy(req.params.id);
    return res.status(204).end();
  }
  catch(e) {
    return res.sendStatus(400);
  }
}

async function update(req, res) {
  try {
    const jsonProducts = await ProductUpdaterService.update(req.params.id, req.body.product);
    return res.json(jsonProducts);
  }
  catch(e) {
    console.log(e)
    return res.sendStatus(400);
  }
}

module.exports = {
  showAll,
  create,
  destroy,
  update
};
