// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// SAMPLE TEST 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//   });
// });

//given: non negative integer
//output: return a string "1 sheep...2 sheep...3 sheep..."

var countSheep = function (num){
    let counter='';
    for (i=1; i<=num; i++){
      counter += i.toString()+ ' sheep...';
    }
    return counter
  }