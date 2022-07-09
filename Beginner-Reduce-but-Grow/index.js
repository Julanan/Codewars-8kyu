// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SAMPLE TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(grow([1, 2, 3]), 6);
//     assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
//     assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
//   });
// })

//input: arr of num
//output: result of multiplying the values together in order

const grow = (x) => x.reduce((total, value) => total * value, 1);
