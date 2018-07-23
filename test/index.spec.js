const assert = require('assert');
const {
  parse,
  stringify
} = require('../src/index');

describe('The package index.js', () => {

  describe('The parse function', () => {
    it(`Should return an object { by:'kati-frantz', popular:'true', category:'nodejs'} off all query params when '?by=kati-frantz&popular=true&category=nodejs' is pass to it`, () => {
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
    it(`Should return a string '?by=kati-frantz&popular=true&category=nodejs' when the object { by:'kati-frantz', popular:'true', category:'nodejs'} is pass to it `, () => {
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