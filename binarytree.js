'use strict';

var traverse = function(aTree) {
  var result = [];
  traverseNode(aTree, result);
  return result;
};

var traverseNode = function(node, result) {
  result.push(node.name);
  if(node.left) traverseNode(node.left, result);
  if(node.right) traverseNode(node.right, result);
};

var binaryTree = {
  traverse: traverse
};

module.exports = binaryTree;
