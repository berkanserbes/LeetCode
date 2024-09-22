/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initialValue = init;
    return {
        increment: () => {
            initialValue++;
            return initialValue;
        },
        decrement: () => {
            initialValue--;
            return initialValue;
        },
        reset: () => {
            initialValue = init;
            return initialValue;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */