/*
What is Merge Sort?
Merge sort is one of the most popular sorting algorithms today and it uses the concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

https://gist.github.com/yeb9925
https://gist.github.com/yeb9925/50f83345deba2d5bb00ff564ba1bb4ea#file-merge_sort-js
*/

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    let resultArray = merge(mergeSort(left), mergeSort(right));
    console.log(resultArray)
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
   let data=  resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   return data
}

mergeSort([10, -1, 2, 5, 0, 6, 4, -5]) 