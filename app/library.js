'use strict'
var exports = module.exports = {}
exports.getPrime = function(n){
	function Range(num){
  		let list = [];
  		for(let i=0; i<=num; i++){
    		list.push(i);
  		}
  		return list;
    	}
  if(typeof n === 'number'){
    if(n>0){
      let test = 0;
      let primeNums = [];
      if (n>0 && typeof n != isNaN){
      let range = Range(n);
      for(let j in range){
        if((j>2 && j%2 ===0) || (j>3 && j%3===0)  || (j>5 && j%5===0) || (j>7 && j%7===0)){
          continue;
        }
        else if(j>1){
          primeNums.push(j);
        }
        else{
          continue;
        }
      }
    } 
    return(primeNums);
    }
  else if (n<0){
    return('Negative input');
  }
  else if(n===0){
    return ('Zero input');
  }
}
  else if(typeof n !== 'number'){
    return('Invalid input');
  }   
};