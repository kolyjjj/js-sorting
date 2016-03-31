'use strict';

var expect = require('chai').expect;
var binaryTree = require('../binarytree');

describe('binary tree', function(){
  it('traverse', function(){

    var aTree = {
      name: 'root node',
      left:{
        name: 'left node level 1',
        left: {
          name: 'left node level 2'
        }
      },
      right: {
        name: 'right node level 1',
        left: {
          name: 'left node level 2'
        },
        right: {
          name: 'right node level 2'
        }
      }
    };
    expect(binaryTree.traverse(aTree)).to.deep.equal([ 'root node',
        'left node level 1',
        'left node level 2',
        'right node level 1',
        'left node level 2',
        'right node level 2' ]);
  });
});
