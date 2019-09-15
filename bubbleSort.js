function bubbleSort(aInput){
    for(var i = 0;i < aInput.length - 1; i++){
        var swapHappend = false;
        for(var j = 0; j < aInput.length - i - 1; j++){
            //swap
            //a, b
            if(aInput[j] > aInput[j + 1]){
                swapHappend = true;
                var temp = aInput[j];
                aInput[j] = aInput[j + 1];
                aInput[j + 1] = temp;
            }
        }
        if(!swapHappend){
            //the array is sorted
            return;
        }
    }
}

var aInput = [100,10,15,23,2,9,28,1,36,1]
console.log(aInput);
bubbleSort(aInput);
console.log(aInput);