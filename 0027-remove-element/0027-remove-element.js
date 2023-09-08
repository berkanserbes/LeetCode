/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0;
    const inputArrLength = nums.length;
    
    for(let i = 0; i < inputArrLength; i++) {
        if(nums[i] !== val) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }

    return j;
};