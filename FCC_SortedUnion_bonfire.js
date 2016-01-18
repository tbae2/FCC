//FCC Sorted Union	

function unite(arr1, arr2, arr3,arr4) {
  //array to store the initial array
  var initArr = [arr1,arr2,arr3,arr4];
  //array to store the final array
  var finalArr = [];
  //reduce function to concatenate the arrays together
  var flatArr = initArr.reduce(function(firstVal,secondVal){

      return firstVal.concat(secondVal);
      
  });
//loop through the flat array, check if value already exists in finalArr, if not push to the final Array.  
  for(var i = 0; i < flatArr.length; i++){
      //check if push value exists , also make sure not pushing undefined objects
      if(finalArr.indexOf(flatArr[i]) === -1 && flatArr[i] !== undefined){
          finalArr.push(flatArr[i]);
      }
  }
  
  return finalArr;
}