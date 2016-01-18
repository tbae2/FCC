//FCC Missing Letters Bonfire

function fearNotLetter(str) {
  
  //variable to store the final char if found to be missing, also used to determine whether to return undefined
  var changedString = '';
  //loop through the string
  for(var i = 0; i < str.length; i++){
     //compare the current char value (i) value to the previous value, if diff > 2 then string is missing
      if((str.charCodeAt(i) - (str.charCodeAt(i-1))) > 1){
          //set the string to the char produced from the code of the missing charunicode number
          changedString = String.fromCharCode((str.charCodeAt(i) - 1));
          
      }
      
  }
  
//logic whether to return true or false, if changed string is blank then return undefined as nothing was missing. 
 if(changedString !== ''){
     return changedString;
 }else {
     return undefined;
 }
  
}