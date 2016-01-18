//FCC Sum All Odd Fibonacci Numbers Bonfire



function sumFibs(num) {

    var storeArray = [];
    var finalArray = [];
    
    for(var i = 0; i <= (num); i++){
      if(i === 0){
          storeArray.push(0);
      }
      else if(i === 1){
          storeArray.push(1);
      }
      else {
      
          storeArray.push((storeArray[i-1]) + storeArray[i-2]);
      }
     
        
    }
    
   console.log(storeArray);
    
   // console.log(storeArray);
    var holdTotal = 0;
    var x = 0;
    do{
  
        if(storeArray[x] % 2 !== 0){
            holdTotal += storeArray[x];
        }
        x++;
       // console.log(x);
    }
    while(storeArray[x] <= num);
    
    console.log(holdTotal);
    /*
    var sumOdd = storeArray.reduce(function(number){
        var holdTotal = 0;
        if(number % 2 !== 0){
            holdTotal += number;
        }
        return holdTotal;
    });
    */
    //console.log(sumOdd);
    
  return holdTotal;
}