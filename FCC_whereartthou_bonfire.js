//freeCodeCamp Bonfire WhereArtAthough (Advanced algorithm scripting)



function where(collection, source) {
  var arr = [];
  // What's in a name?
  origin = new Object(collection);
  findThis = new Object(source);
  originKeys = Object.keys(origin);
var countMatches = 0;
var result = [];
function filterMatches(values){
        
        
          
      for(var objProp in source){
          

          //console.log(values.hasOwnProperty(objProp));
        if(values.hasOwnProperty(objProp) && values[objProp] === source[objProp]){
           countMatches++;
       }
    
        //console.log(countMatches);
       }
      console.log(countMatches);
      console.log(Object.keys(source).length);
          if(countMatches >= (Object.keys(source).length)){
          result.push(values);
          
          }
      countMatches = 0;
    //console.log(result);
    return result;

}
  //console.log(result);
 final = origin.filter(filterMatches);
   return result;
 
 
}
