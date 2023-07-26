/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    const numsLength = nums.length;
    
    for(let i=1; i<=numsLength; i++) {
        if(!nums.includes(i)) {
            result.push(i)
        }
    }
    return result
};
