/**
 * Percentage Repartition
 *
 * @version 1.0.0
 * @package index
 * @author Alexandre ELISÉ <contact@alexapi.cloud>
 * @copyright (c) 2009-2022 . Alexandre ELISÉ . Tous droits réservés.
 * @license GPL-2.0-and-later GNU General Public License v2.0 or later
 * @link https://alexapi.cloud
 */

/**
 * Compute Percentage Repartition
 * @param maxTotal must be between 0 and 100
 * @param data your data for example [[0,1,1],[0,1,1]]
 * @returns {[number,*]}
 */
const percentageRepartition = function (maxTotal = 100, data = [[0, 0, 0], [0.0, 0, 0], [0.0, 0, 0]]) {
    if (maxTotal < 0.0 || maxTotal > 100.0) {
        throw new Error("maxTotal is out of range. It must be between 0 and 100");
    }
    if (!data) {
        throw new Error("No dataset provided. Cannot continue.");
    }
    
    if (data) {
        data.forEach(function (currentItem) {
            if (isNaN(currentItem[0]) || isNaN(currentItem[1]) || isNaN(currentItem[2])) {
                throw new Error("data must be an array with at least one element like [0,1,0] or [0,1,1]. For example [[0,1,0],[0,1,0]]");
            }
            if ([0, 1].indexOf(currentItem[2]) === -1) {
                throw new Error("data element at index 2 must be 0 or 1.");
            }
        });
    }
    if (data.length <= 1) {
        throw new Error("Nothing can be split since number of elements is below 2");
    }
    if (data.length % 2 === 1) {
        let initialElementPercentageAggregate = data.reduce(
            function (itemInitialElementPercentagePrevious, itemInitialElementPercentageCurrent) {
                return itemInitialElementPercentagePrevious + itemInitialElementPercentageCurrent[0];
            }, 0);
        let isSameIncrementByValue = true;
        for(let i = 1, len = data.length; i < len; i++) {
            isSameIncrementByValue &&= (data[i] === data[i - 1]);
            if (isSameIncrementByValue === false) {
                break;
            }
        }
        
        let canChangeAggregate = data.reduce(
            function (itemCanChangePrevious, itemCanChangeCurrent) {
                return itemCanChangePrevious + itemCanChangeCurrent[2];
            }, 0);
        
        // to be able to have 100.000% we must have at least one fixed value for impair number of elements
        if ((isSameIncrementByValue && (initialElementPercentageAggregate === 0) && (canChangeAggregate >= data.length))) {
            throw new Error("Logic error cannot split percentage to get exactly 100% with the provided arguments. Please set at least one value to be unchanged for impair number of elements in your provided dataset");
        }
    }
    
    let total = 0;
    let output = 0;
    const mapper = function (values, increment) {
        return function (item) {
            let currentResult = item[0];
            currentResult = currentResult + (increment * item[1] * item[2]);
            values.push(parseFloat(currentResult.toFixed(3)));
        }
            ;
    };
    const reducer = function (previousValue, currentValue) {
        return parseFloat((previousValue + currentValue).toFixed(3));
    };
    let k = 0.001;
    let values = [];
    for (let n = total; n < maxTotal; n = n + 0.001) {
        values = [];
        data.forEach(mapper(values, k));
        output = values.reduce(reducer, total);
        if (output >= maxTotal) {
            break;
        }
        k = k + 0.001;
    }
    return [output, values];
};

module.exports = percentageRepartition;
