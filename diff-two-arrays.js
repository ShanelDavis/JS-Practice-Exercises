function diffArray(arr1, arr2) {
 var newArr = arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
  console.log(newArr);
  console.log("It worked!")
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//returns elements of 2 arrays that do not appear in both.