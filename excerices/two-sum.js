// O(n) - One-pass Hash Table
// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
//     return map
// }

// const twoSum = function(nums, target) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i] ]>=0){
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i
//     }
// };

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};

let nums = [2, 7, 11, 15], target = 26;
console.log(twoSum(nums,target))