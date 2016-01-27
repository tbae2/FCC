//FCC smallest common multiple (trying different way from solution)


function smallestCommons(arr) {

	var holdRange = [];
	for(var i = arr[1]; i >= arr[0]; i--){
		holdRange.push(i);
	}
	console.log(holdRange);


}


smallestCommons([1,5]);
