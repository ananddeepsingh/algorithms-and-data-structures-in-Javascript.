function staircase(n) {
    debugger;
    let stairs = '';
    let hash = '#';
    let space = ' ';
    for (var i = 0; i <= n; i++) {
        if (i !== 0) {
            stairs += space.repeat(n - i) + hash.repeat(i) + '\n'
        }
    }
    console.log(stairs);
}
// console.log(staircase(3));
staircase(3)
