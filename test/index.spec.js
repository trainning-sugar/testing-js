const assert = require('assert');
const {parse, stringify} = require('../src/index');

describe('index package', () => {
  describe('Function parse', () => {
    it('Should return a objetc when a query string is passed to it', () => {
      assert.deepEqual(parse('by=kati-frantz&popular=true&category=nodejs'), {
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs'
      });
    });
    it(`Should return an objetc : {number : 3} when '?number = 3' is passed into it` , () => {
      assert.deepEqual(parse('number=3'), {number:3});
    })
  });
  describe('Function stringify', () => {
    it('Should eliminates all undefined and null values' , () => {
      assert.equal(stringify({
          by : 'kati-frantz',
          popular : undefined,
          unaswered : null
        }
      ), '?by=kati-frantz')
    });
    it('Should return a query string when a object is passed to it', () => {
      assert.deepEqual(stringify({number:3}) , '?number=3')
    });
  })
})