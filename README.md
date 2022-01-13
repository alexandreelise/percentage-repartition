# Percentage Repartition

Compute a percentage repartition based on possibly fixed percentage values in a dataset

### USAGE

```js
const percentageRepartition = require('percentage-repartition');

// maxTotal must be between 0 and 100
const maxTotal = 100;

// your percentages
// if form of
// [
//   [percentage, incrementBy, canChange],
//   ...
// ]
// percentage between 0 and maxTotal (with maxTotal between 0 and 100)
// incrementBy positive integer
// canChange is a boolean value 0 or 1
// if you want a specific percentage in the repartition not to change set it to 0
let data = [
    [10, 1, 1],
    [25, 1, 0],
    [0, 1, 1],
    [4, 1, 0]
];

let result = percentageRepartition(maxTotal, data);

console.log(result);
//result: [ 100, [ 40.5, 25, 30.5, 4 ] ]

```

-------------------------------

## INFOS

> English:
Click here to get in touch
https://github.com/mralexandrelise/mralexandrelise/blob/master/community.md

> Français:
Cliquez ici pour me contacter
https://github.com/mralexandrelise/mralexandrelise/blob/master/community.md

