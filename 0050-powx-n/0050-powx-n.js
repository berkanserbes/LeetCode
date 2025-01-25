/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function calculate_power(x, n) {
        if(x === 0)
            return 0;

        if(n === 0)
            return 1;

        let calcResult = calculate_power(x, Math.floor(n / 2));
        calcResult *= calcResult;

        if(n % 2 === 1)
            return calcResult * x;

        return calcResult;
    }

    let result = calculate_power(x, Math.abs(n));
    
    if(n < 0)
        return (1 / result);

    return result;
};