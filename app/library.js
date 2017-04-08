'use strict'
var exports = module.exports = {}
exports.aritGeo = function(arr){
  if(arr.length===0){
    return 0;
  }
  else{
    let arit = true;
    let geo = true;
    let ratio = arr[1]/arr[0];
    let diff = arr[1]-arr[0];
    for (let i=0; i<arr.length-1; i++){
      if(arr[i+1]-arr[i] !==diff){
        arit = false;
      }
      if(arr[i+1]/ratio !== arr[i]){
        geo = false;
      }
    }
    if(arit===true){
      return 'Arithmetic';
    }
    else if (geo ===true){
      return 'Geometric';
    }
    else{
      return -1;
    }
 }
  
};