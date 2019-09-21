let arr = [3,2,1,3];

// let height = Math.max.apply(null, arr);
let height = Math.max(...arr);
let count = 0;

arr.find( o =>{ if(o === height){ count++ } });

console.log(count)