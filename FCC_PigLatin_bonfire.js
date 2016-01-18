// FCC Pig Latin bonfire 

function translate(str) {
 //split the input string
 var startWord = str.split('');
 var finalWord = '';
//array to declare vowels
 var vowelArray = ['a','e','i','o','u'];
//check the first letter of the word to see if it's a vowel or consonant
    if(vowelArray.indexOf(startWord[0]) >= 0){
           finalWord = startWord.join('') + "way";
    }
    else{
        var indexCount = 0;
        var buildLatin = startWord.join('');
        while(vowelArray.indexOf(startWord[indexCount]) === -1){
            indexCount++;
        }
        //build the final word 
    finalWord = buildLatin.substr(indexCount,startWord.length) + buildLatin.substr(0,indexCount) + "ay";
        
    }
  return finalWord;
}