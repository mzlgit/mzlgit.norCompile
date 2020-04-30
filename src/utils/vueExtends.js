/**
 * 去除数组中重复元素，返回新数组
 * array数组扩展方法
 * @returns {Array}
 */
Array.prototype.distinct = function() {
    let result = [],
        hash = {};
    for (let i = 0, elem; (elem = this[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
};
