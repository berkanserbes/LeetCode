/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function helper(current, seen) {
        if(current === 1) return true;
        if(seen.has(current)) return false;

        seen.add(current);
        const next = getDigitSquareSum(current);

        return helper(next, seen);
    }

    function getDigitSquareSum(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    return helper(n, new Set())
};