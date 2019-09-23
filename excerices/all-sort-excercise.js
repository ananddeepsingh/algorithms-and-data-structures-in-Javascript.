// https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort

// let arr = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1];
let arr = [7, 5, 2, 4, 3, 9, 3, 4, 7];
let arr2 = [1, 2,
    100,
    12303479849857341718340192371,
    3084193741082937,
    3084193741082938,
    111,
    200];
let arr3 = [31415926535897932384626433832795, 1, 3, 10, 3, 5];


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

// console.log(bubbleSort(arr3))

function mergeSort(arr) {
    debugger
    let len = arr.length;
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid)

    console.log(left, right, mid)

    if (len < 2)
        return arr;

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    debugger
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

// console.log(mergeSort(arr))

function find(arr) {
    for (let i = 0, max = arr.length - 1; i < max; i += 2) {
        if (arr[i] != arr[i + 1])
            return arr[i];
        console.log(arr[arr.length - 1]); // Single element is the last
    }
}

// find(arr)

input = [7, 4, 9, 4]
function marcsCakewalk(calorie) {
    let sortedArr = calorie.sort((a, b) => { return b - a });
    let totalVal = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0) {
            totalVal = sortedArr[i];
        } else {
            // totalVal += (2 * i) * sortedArr[i];
            totalVal += getSqureRoot(i) * sortedArr[i];
        }
    }
    console.log(totalVal)
}

function getSqureRoot(n) {
    let finalVal = 2;
    for (let i = 1; i < n; i++) {
        console.log(finalVal, i)
        finalVal = finalVal * 2;
    }
    // console.log(finalVal);
    return finalVal;
}
marcsCakewalk(input)
// getSqureRoot(3);