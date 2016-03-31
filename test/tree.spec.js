'use strict';

var expect = require('chai').expect;
var tree = require('../tree');

describe('tree', function(){
  it('traverse', function(){
    var aTree = {
      name: 'root node',
      children:[
      {
        name: 'child one'
      },
      {
        name: 'child two',
        children:[
        {
          name: 'child of child two'
        },
        {
          name: 'child of child two'
        }
        ]
      }
      ]
    };
    expect(tree.traverse(aTree)).to.deep.equal([
        "root node",
        "child one",
        "child two",
        "child of child two",
        "child of child two"
      ]);
  });
});
