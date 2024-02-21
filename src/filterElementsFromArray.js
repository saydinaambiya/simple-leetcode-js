/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArray = [];

    arr.forEach((item, i) => {
        if (fn(item, i)) {
            newArray.push(item);
        }
    });
    return newArray;
};

const arr = [-2,-1,0,1,2];
const graterThan10 = (n) => n + 1;

const filterArray = filter(arr, graterThan10);

console.log(filterArray);

exports.module = filter;