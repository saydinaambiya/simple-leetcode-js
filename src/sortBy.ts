/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// type JSONValue = null | boolean | number | string | Array<JSONValue> | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: Array<JSONValue>, fn: Fn): Array<JSONValue> {
    return arr.slice().sort((a: number, b: number) => fn(a) - fn(b));
};
