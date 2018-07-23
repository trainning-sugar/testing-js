const assert = require('assert');
const {
  parse,
  stringify
} = require('../src/index');

describe('The package index.js', () => {
  const str = '?by=kati-frantz&popular=true&category=nodejs';
  const obj = { by:'kati-frantz', popular:'true', category:'nodejs'};

  describe('The parse function', () => {
    it(`Should return an object ${obj} off all query params when ${str} is pass to it`, () => {
      const actual = parse(str);
      const expected = obj;
      assert.deepEqual(actual, expected);
    });
  });
  describe('The stringify function', () => {
    it(`Should return a string ${str} when a object ${obj} is pass to it `, () => {
     const actual = stringify(obj);
     const expected = str;
     assert.deepEqual(actual,expected);
    })
  })

});