
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  el = array[1]
  for(i=0;i<array.length;i++)
  {
    if(el>array[i])
    {
      el=array[i]
    }
  }
  return el
}


exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  el = array[1]
  for(i=0;i<array.length;i++)
  {
    if(el<array[i])
    {
      el=array[i]
    }
  }
  return el
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }
  el = 0
  for(i=0;i<array.length;i++)
  {
   el+=array[i]
  }
  el=el/array.length
  return el
}
