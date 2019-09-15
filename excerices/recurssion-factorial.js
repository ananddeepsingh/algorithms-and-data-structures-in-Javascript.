// 6! = 6 * 5 * 4 * 3 * 2 * 1 
function factorial(n){
    var result = n;
    while(n > 1){
        n--;
        result = result * n;
    }
    return result;
}

function recursiveFactorial(n){
    if(n <= 1){
        return 1;
    }else{
        var temp = recursiveFactorial(n - 1)
        return n * temp;
        // 6 * 120 = 720
        //f(5) = 120
        //f(4) = 24
        //f(3) = 6
        //f(2) = 2
        //f(1) = 1
     }
}

console.log(factorial(4));
console.log(recursiveFactorial(6));