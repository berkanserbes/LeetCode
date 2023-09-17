/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let low = 0;
    let high = low + 1;
    
    while(high < nums.length) {
        if(nums[low] !== 0) {
            low++;
            high++;
        } else {  // nums[low] === 0 
            if(nums[high] !== 0) {
                // replace
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
    }
};