//FCC Sum All Primes Bonfire (using the sieve method)

function sumPrimes(num) {

    var storeNums = [];
    var storePrimes = [];
    for(var i = 2; i < num; i++){
        storeNums.push(i);
    }
   //check if value is prime, used to populate the 'storePrimes' array, copied , can be improved later.
    function isPrime(value){
        for(var i =2; i< value; i++){
            if(value % i === 0){
                return false;
            }
        }
        return true;
    }
    

    
    //loop through list of integers and test for prime with built function from above. 
    for(var x = 0; x < storeNums.length; x++){
        
        if(isPrime(storeNums[x]) === true){
            storePrimes.push(storeNums[x]);
        }
        
        
    }
    //sum the primes using reduce. 
    var result = storePrimes.reduce(function(a,b){ return a + b});
    console.log(result);



}

sumPrimes(977);
