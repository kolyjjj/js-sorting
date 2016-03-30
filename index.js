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

var sort = {
  bubble: bubble 
};

module.exports = sort;
