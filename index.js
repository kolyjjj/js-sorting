'use strict';

var bubble = function(array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
      for (var j = len - 1; j > i; j--) {
          if (array[j] < array[j - 1]) {
              var temp = array[j];
              array[j] = array[j-1];
              array[j-1] = temp;
            }
        }
    }

  return array;
};

var sort = {
  bubble: bubble 
};

module.exports = sort;
