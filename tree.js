'use strict';

var traverse = function(rootNode) {
  var result = [];
  tran(rootNode, result);
  return result;
};

var tran = function(node, result) {
  result.push(node.name);
  if (node.children) {
      for(var i = 0; i < node.children.length; i++) {
          tran(node.children[i], result)
        }
    }
};

var tree = {
  traverse: traverse
};

module.exports = tree;
