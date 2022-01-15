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
## USE CASE SCENARIO
> Scenario : Let's say you want to split percentage between 3 people and the rest is for the "system" (owner: 40%, manager: 20%, developer: 10%, system)

Here is the config for that scenario:

```js
const maxTotal = 100;

let data = [
    [40, 1, 0], // last 0 means stay as is
    [20, 1, 0],
    [10, 1, 0],
    [0, 1, 1]
];

let result = percentageRepartition(maxTotal, data);

console.log(result);
// result: [ 100, [ 40, 20, 10, 30 ] ]

```
In this case it calculated that 30% goes back to the "system" by incrementing one by one (second digit in the fourth array ) and starting at 0 (first digit in the fourth array) until maxTotal - 40+20+10 equals 0

-------------------------------

## INFOS

> English:
Click here to get in touch
https://github.com/mralexandrelise/mralexandrelise/blob/master/community.md

> Français:
Cliquez ici pour me contacter
https://github.com/mralexandrelise/mralexandrelise/blob/master/community.md

