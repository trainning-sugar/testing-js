const assert = require('assert');
const {
  parse,
  stringify
} = require('../src/index');

describe('The package index.js', () => {

  describe('The parse function', () => {
    it(`Should return an object of all query params when a query string is passed to it`, () => {
      const actual = parse('?by=kati-frantz&popular=true&category=nodejs');
      const expected = {
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs'
      };
      assert.deepEqual(actual, expected);
    });
    it(`Should return {number:'3'} when the query '?number=3' is pass to it`, () => {
      assert.deepEqual(parse('?number=3'), {
        number: '3'
      });
    })
  });
  describe('The stringify function', () => {
    it(`Should return query string with a query params when a object is pass it `, () => {
      const actual = stringify({
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs'
      });
      const expected = '?by=kati-frantz&popular=true&category=nodejs';
      assert.deepEqual(actual, expected);
    });
    it(`Should return '?number=3' when object {number:3} is pass it`, () => {
      assert.deepEqual(stringify({
        number: '3'
      }), '?number=3');
    })
  })
});