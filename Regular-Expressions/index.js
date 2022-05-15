// https://www.codewars.com/kata/573bca07dffc1aa693000139/train/javascript

// Task
// This time you do not need coding in function. You just need to write a regular expression that matches the specified numeric string. I've given the regular expression name: "regex", please don't modify the name.

// According to the following rules:

// The numeric string first digit should be "9".
// At the end of the number string there are at least four "0".
// It can also be a negative number(This means that the string may be started by "-", maybe not)
// Examples
// regex.test("90000") should return true
// regex.test("-90000") should return true
// regex.test("900000000") should return true
// regex.test("91230000") should return true
// regex.test("-91230000") should return true

// regex.test("90001") should return false
// regex.test("9000") should return false
// regex.test("91230") should return false
// regex.test("1-90000") should return false
// regex.test("-90000123") should return false

// SAMPLE TEST 
// describe("Tests", () => {
//     it("test", () => {
//       Test.assertSimilar(regex.test("90000") , true);
//       Test.assertSimilar(regex.test("-90000") , true);
//       Test.assertSimilar(regex.test("900000000") , true);
//       Test.assertSimilar(regex.test("91230000") , true);
//       Test.assertSimilar(regex.test("-91230000") , true);
//       Test.assertSimilar(regex.test("190000") , false);
//       Test.assertSimilar(regex.test("90001") , false);
//       Test.assertSimilar(regex.test("9000") , false);
//       Test.assertSimilar(regex.test("91230") , false);
//       Test.assertSimilar(regex.test("1-90000") , false);
//       Test.assertSimilar(regex.test("-90000123") , false);
      
//     });
//   });
  
//given: integer first num should be 9, end of string should be at 4 "0" and it can be negetive or positive
//output: write a regular expression that matches the specified numeric string.

var regex=/^-?9.*?0{4}$/