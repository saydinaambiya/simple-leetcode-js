//2620 Counter
/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
    
    return function () {
        console.log(n++);
    }
};

module.exports = createCounter;