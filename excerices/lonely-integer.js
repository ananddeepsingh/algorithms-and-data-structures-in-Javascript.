let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
    console.log(a.reduce(function (a, b) { return a ^= b; }));
}

lonelyinteger(a)