const assert = require('assert');
const {add} = require('./index');

describe('The add function  test', () =>{
  it('Should return 11 for arguments 5 and 6 ', ()=>{
    const actual = add(5,6);
    const expectation = 12;
    assert.equal(actual, expectation);
  });
  it('Should return an error if arguments are not passed in', ()=>{
    assert.throws(()=>{
      add();
    })
  })
})