let a = [17, 28, 30];
let b = [99, 16, 8];

let player1 = 0;
let player2 = 0;

for (let i = 0; i < a.length; i++) {

    if (a[i] > b[i]) {
        player1++
    } else if (a[i] < b[i]) {
        player2++
    }
}

console.log(player1, player2)