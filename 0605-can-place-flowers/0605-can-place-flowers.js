/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i<flowerbed.length; i++) {
        let prev = (i - 1) >= 0 ? flowerbed[i-1] : flowerbed[0];
        let current = flowerbed[i];
        let next = flowerbed.length > (i + 1) ? flowerbed[i+1] : flowerbed[flowerbed.length - 1];

        if(prev === 0 && current === 0 && next === 0) {
            flowerbed[i] = 1;
            n--;
        }
        if(n === 0) return true;   
    }

    return n <= 0;
};