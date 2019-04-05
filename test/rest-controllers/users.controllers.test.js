const { expect } = require('chai');
const supertest = require('supertest');

const user = require('../../src/schema/user');
const product = require('../../src/schema/product');
const { stop, start, httpServer } = require('../../src/server');

describe('rest-controllers/user-controller', () => {
  before(() => start());
  beforeEach(async () => {
    shared = {};
    shared.request = supertest(httpServer)
      .post('/api/users')
      .set('Accept', 'application/vnd.api+json')
      .expect('Content-Type', /json/);
  });
  describe('.create', () => {
    context('object user ok', () => {
      beforeEach(async () => {
        item = {
          user: {
            user: 'aa',
            fullname: "sidet ly",
            password: 'aa',
          }
        }
        shared.httpResponse = await shared.request.send(item);
      });

      it('should new user', () => {
        expect(1).to.equal(1)
      });
    });
  });
});
