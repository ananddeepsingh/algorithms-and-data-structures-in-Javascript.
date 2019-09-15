function spiral(matrix) {
    let finalArr = [];

    while (matrix.length > 0) {

        if(matrix.length === 1){
            finalArr.push(matrix[0].toString());
            break;
        }
        //top to right
        let topToRight = topToRightFN(matrix);
        finalArr.push(topToRight);

        //bottom to left
        let bottomToLeft = bottomToLeftFN(matrix);
        finalArr.push(bottomToLeft);
    }

    return finalArr.toString().split()
}

function topToRightFN(matrix) {

    let top = matrix.splice(0, 1);
    let rightArr = []
    for (let i = 0; i < matrix.length; i++) {
        rightArr.push(matrix[i].splice(-1, 1));
    }

    return top.concat(rightArr).toString()
}

function bottomToLeftFN(matrix) {
    let bottom = matrix.splice(matrix.length -1, 1)[0].reverse()
    let left = [];
    
    for(let i=0; i < matrix.length; i++){
        left.push(matrix[i].splice(0,1))
    }

    return bottom.concat(left).toString();
}


// setup a matrix
var M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// return it in spiral order
console.log(spiral(M)); 