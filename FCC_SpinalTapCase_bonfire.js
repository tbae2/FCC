//FCC Spinal Tape Case Bonfire


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
    function replaceMatches(caps){
        
        return caps.toLowerCase() + "-";
    }

    var matchReg = /[a-z]+|[A-Z]+[a-z]+/g;
  
  var finalStr = str.replace(/_|\-/g," "); 

  finalStr =   finalStr.replace(matchReg, replaceMatches)
    
  finalStr = finalStr.replace(/\s/g,""); 
  
    return finalStr.slice(0,finalStr.length -1);
}