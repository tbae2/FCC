//FCC DNA Pairing bonfire



//revision 1
/* function pair(str) {
  
  var splitInitial = str.split('');
  var finalArr = [];
  console.log(splitInitial);
  
  for(var i = 0; i < splitInitial.length; i++){
       buildArr = [];
      if(splitInitial[i] === "A"){
          buildArr.push(splitInitial[i]);
          buildArr.push("T");

      }
      else if(splitInitial[i] === "T"){
          buildArr.push(splitInitial[i]);
          buildArr.push("A");
      }
      else if(splitInitial[i] === "C"){
          buildArr.push(splitInitial[i]);
          buildArr.push("G");
      }
      else if(splitInitial[i] === "G"){
          buildArr.push(splitInitial[i]);
          buildArr.push("C");
      }
                
                
        finalArr.push(buildArr);
         buildArr = [];
  }
  
 return finalArr;
  
}
*/
//revision 2
function pair(str){
    //split the initial arr
    var initialStr = str.split('');
    //array to hold the final 2d array
    var finalArr = [];
    //key value array to store values to match
    var matchPairs = {
        "T": "A",
        "A": "T",
        "G": "C",
        "C": "G"
    };
    
   //loop through the initial string array and push matches    
    initialStr.forEach(function(halfpair){
        //blank the build array each time
        buildArr = [];
        //push the first half of pair to match
        buildArr.push(halfpair);
        //object reference match pairs key value array
        buildArr.push(matchPairs[halfpair]);
        finalArr.push(buildArr);
        
    });


    return finalArr;
}