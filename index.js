'use strict';

var bubble = function(array) {
  var input = (typeof array === 'string' ? array.split('') : array);
  var len = input.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j > i; j--) {
      if (input[j] < input[j - 1]) {
        var temp = input[j];
        input[j] = input[j-1];
        input[j-1] = temp;
      }
    }
  }

  return (typeof array === 'string') ? input.join('') : input;
};

var insertion = function(array) {
  var len = array.length;
  for (var i = 1; i < len; i++) {
    var key = array[i];
    for (var j = i - 1; j >= 0 && array[j] > key; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = key;
  }
  return array;
};

var selection = function(array) {
  var len = array.length;
  for (var i = 0; i < len; i++) {
    var min = array[i];
    for (var j = i; j < len; j++) {
      if (array[j] < min) {
        var temp = min;
        min = array[j];
        array[j] = temp;
      }
    }
    array[i] = min;
  }
  return array;
};

var sort = {
  bubble: bubble,
  insertion: insertion,
  selection: selection
};

module.exports = sort;
