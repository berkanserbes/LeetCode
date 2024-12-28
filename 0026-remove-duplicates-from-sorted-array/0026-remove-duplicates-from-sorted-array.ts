function removeDuplicates(nums: number[]): number {
    const uniqueArray = [...new Set(nums)];
    nums.length = 0;
    nums.push(...uniqueArray)
    return nums.length;
};