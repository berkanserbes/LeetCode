/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    const N = nums.length;

    if(N === 1) {
           return nums[0]
       } 

    for(let i=0; i < N - 1; i++) {
       if(nums[i] === nums[i+1])
         count++;
        else
          count = 0; 

        if(count >= Math.floor(N / 2)) {
            return nums[i]
        }
    }
};