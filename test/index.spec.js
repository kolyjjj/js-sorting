'use strict';

var expect = require('chai').expect;
var sort = require('../index');

describe('sorting', function(){

  it('bubble sort', function(){
    expect(sort.bubble([])).to.deep.equal([]);
    expect(sort.bubble([1])).to.deep.equal([1]);
    expect(sort.bubble([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
    expect(sort.bubble([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
    expect(sort.bubble([3,2,1,4,5,6,11])).to.deep.equal([1,2,3,4,5,6,11]);
    expect(sort.bubble('one')).to.equal('eno');
  });

  it('insertion sort', function(){
    expect(sort.insertion(3,2,1,4,5,6,11)).to.deep.equal([1,2,3,4,5,6,11]);
    });
});
