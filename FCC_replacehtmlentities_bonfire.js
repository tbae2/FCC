//FCC replace html entities

function convert(str) {
//console.log(str.split(''));
 function replace(matchItem){   
//holds the key pairs to replace 
    var htmlEntityArr = {
        
            "&": '&amp;',
            '"': '&quot;',
            '\'': '&apos;',
            '<': '&lt;',
            '>': '&gt;'
        
    };
        //return the matched non alpha-numerc item 
            return htmlEntityArr[matchItem];
  }
   //built regex /g to global the entire string 
    var re = /[^a-zA-Z0-9 :]/g;
    //holds the final result and applies the replace function declared above
    var finalStr = str.replace(re,replace);

  // &colon;&rpar;11111
  return finalStr;
}