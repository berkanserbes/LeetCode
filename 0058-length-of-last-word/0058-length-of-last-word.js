/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(str) {
    let trimmedStr = str.trim();
    return trimmedStr.length - trimmedStr.lastIndexOf(' ') - 1;
};