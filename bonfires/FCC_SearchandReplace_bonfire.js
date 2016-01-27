//FCC Searcn and replace Bonfire

function myReplace(str, before, after) {
 

 var beforeWord = before;
 var finalWord = after.split('');
 var regExDelete = new RegExp('/' + before + '/', 'gi');
 
 //check first char of word , if uppercase then make final //word upper case as well
 
 if(before[0].toUpperCase() == before[0]){
     finalWord[0] = finalWord[0].toUpperCase();
     finalWord = finalWord.join('');
 }
 else {
     finalWord = finalWord.join('');
 }

 var newStr = str.replace(beforeWord, finalWord);
  
  
   return newStr;
  
}