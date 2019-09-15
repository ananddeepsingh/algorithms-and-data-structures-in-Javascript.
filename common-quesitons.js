// Reverse the word in the string
var str = "My name is khan" // Khan is name My. ;
let arr = [53, 23, 3, 6, 25, 1, 9];
let arr2 = [-53, -23, -3, -6, -25, -1, -9];

// str2.split(' ').reverse().join().replace(/,/g,' ');

// let arr = [1, 5, 8, 9, 10];
// let totalLen = 14;

// for (let i = 0, len = arr.length; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//         if (arr[i] + arr[j] === totalLen) {
//             console.log(arr[i] + "+" + arr[j], totalLen)
//         }
//     }
// }


// let smallestVal = arr[0];
// let largest = arr[0];

// for (let i = 0, len = arr.length; i < len; i++) {
//     console.log(arr[i], smallestVal);

//     let temp = arr[i]
    
//     if (temp > largest) {
//         largest = temp
//     }

//     if (temp < smallestVal) {
//         smallestVal = temp
//     }

// }
// console.log(smallestVal)
// console.log(largest)

// check the delta difference which on is having hight delta difference
// let maxDelta = Math.abs(arr[0]-arr[1]);
// for(let i=1, len = arr.length; i < len; i++){
//     let temp1 = arr[i-1];
//     let temp2 = arr[i];
//     let delta = Math.abs(temp1 - temp2)

//     console.log(temp1, temp2, delta)
//     if(delta > maxDelta && delta !== Nan){
//         maxDelta = delta;
//     }
// }
// console.log(maxDelta)

//
// Creating two dimenstional array
//
function createMultiArray(row,col){
    let finalArr = []
    for(let i=0; i < row; i++){
        let newArr = [];
        for(let j =0; j < col; j++){
		    newArr.push(0);
		}
        finalArr.push(newArr)
    }
    return finalArr
}

