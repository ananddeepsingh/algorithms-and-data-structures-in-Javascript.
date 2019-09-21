// function miniMaxSum(arr) {
//     let minSum = 0;
//     let maxSum = 0;
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     let filterForMax = arr.filter(el => el > min);
//     let filterForMin = arr.filter(el => el < max);

//     for (let i = 0; i < filterForMax.length; i++) {
//         maxSum = maxSum + filterForMax[i];
//     }

//     for (let i = 0; i < filterForMin.length; i++) {
//         minSum = minSum + filterForMin[i];
//     }

//     console.log(maxSum, minSum)
// }

// miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625]);

// function miniMaxSum(arr) {
//     const maxArr = [...arr].sort((a, b) => a - b);
//     const minArr = [...arr].sort((a, b) => b - a);
//     const max = maxArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
//     const min = minArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
//     console.log(min + '' + max);
// }

function miniMaxSum(arr) {
    arr.sort();
    var minSum = sum(arr.slice(0, -1))
    var maxSum = sum(arr.slice(1))
    console.log(minSum, maxSum)
}

function sum(subArr) {
    return subArr.reduce((a, b) => a + b);
}