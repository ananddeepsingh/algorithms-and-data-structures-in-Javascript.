
function selectionSort(arr) {
	//find smallest number

	for (let wall = 0; wall < arr.length - 1; wall++) {
		// wall - index, points at first number behind "wall"
		let indexOfSmallest = wall;

		for (let j = wall + 1; j < arr.length; j++) {
			if (arr[indexOfSmallest] > arr[j]) {
				indexOfSmallest = j;
			}
		}
		
		//smallest element is on indexOfSmallest
		//swap
		let temp = arr[wall];
		arr[wall] = arr[indexOfSmallest];
		arr[indexOfSmallest] = temp;

		console.log('swapping ' + arr);
	}

	return arr;
}


let arr = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1]
console.log(arr);
selectionSort(arr);
console.log(arr);

