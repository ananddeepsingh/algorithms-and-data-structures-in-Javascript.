// https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort

// let arr = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1];
let arr = [7, 5, 2, 4, 3, 9, 3, 4, 7];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[i], arr[j]);
            let temp;
            if (arr[i] > arr[j]) {
                temp = arr[i];

                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}

// console.log(bubbleSort(arr))

function mergeSort(arr) {
    let len = arr.length;
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid)

    // console.log(left, right, mid)

    if (len < 2) 
        return arr;

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

console.log(mergeSort(arr))