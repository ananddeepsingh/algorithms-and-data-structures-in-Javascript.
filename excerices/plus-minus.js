let positive = 0;
let negative = 0;
let zeros = 0;
let len = arr.length;

for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 0) {
        zeros++
    } else if (Math.sign(arr[i]) === -1) {
        negative++
    } else if (Math.sign(arr[i]) === 1) {
        positive++
    }

    //         console.log(zeros, negative, positive)
}
console.log(
    positive / len.toFixed(6),
    negative / len.toFixed(6),
    zeros / len.toFixed(6)
)