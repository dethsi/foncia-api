const { expect } = require('chai');

const { stop, start } = require('../..');
const product = require('../../src/schema/product');
const ProductCreatorService = require('../../src/services/products/product-creator.service');
const ProductUpdaterService = require('../../src/services/products/product-updater.service');

describe('services/product-updater.service', () => {
  before(() => start());
  describe('update()', () => {
    context('when success', () => {
      const shared = {
        createProduct: null,
        updatedProduct: null,
      };
      beforeEach(async () => {
        item = {
            label: 'test nike',
            price: 204,
            amount: 150
        }

        shared.createProduct = await ProductCreatorService.create(item);
        item.label = 'test nike update';
        item.amount = 0;
        shared.updatedProduct = await ProductUpdaterService.update(shared.createProduct.product._id, item)
      });

      it('should return updated product', () => {
        expect(shared.updatedProduct).to.be.an('object');
        expect(shared.updatedProduct.label).to.eql('test nike update');
        expect(shared.updatedProduct.amount).to.eql(0);
      });
    });
    context('when id not exist', () => {
      const shared = {
        updatedProduct: null,
      };

      beforeEach(async () => {
        item = {
            label: 'test nike',
            price: 204,
            amount: 150
        }
        fakeId = '5ca714d4574aa372233ee5b2'
        shared.updatedProduct = await ProductUpdaterService.update(fakeId, item)
      })
      it('should return null', () => {
        expect(shared.updatedProduct).to.eql(null);
      });
    });
  });
});
