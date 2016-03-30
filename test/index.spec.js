'use strict';

var expect = require('chai').expect;
var sort = require('../index');

describe('sorting', function(){

  it('bubble sorting', function(){
    expect(sort.bubble([3,2,1,4,5,6,11])).to.deep.equal([1,2,3,4,5,6,11]);
  });
});
