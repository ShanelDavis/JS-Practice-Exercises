/*Create a function that takes three parameters and returns an array
with the first parameter x, the second parameter y, and any number
in between the first and second parameter in ascending order. Then filter
through the array and return the array with numbers that are only divisible
by the third parameter n.*/

function arrayOperation(x, y, n) {
	var arr = [x,y].sort();
  var divArr= [];
 let i = arr[0];
 let max = arr[1];
  while(i <= max){
    divArr.push(i);
    i++;
  }
  divArr = divArr.filter((divArr => divArr % n  === 0));
	return divArr;
}

/*final array should only consist of numbers between x and y inclusice that are
divisible by n*/


/*return empty if no numbers divisible by n in range */
