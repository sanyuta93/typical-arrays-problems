
exports.min = function min (array) {
  if (array && array.length > 0){
    return array.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length > 0){
    return array.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }
  return 0;
  
}

exports.avg = function avg (array) {
  if (array && array.length > 0){
    return array.reduce((a, b) => a + b) / array.length;
  }
  return 0;
}
