// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript+

// Be Concise I - The Ternary Operator
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

// SAMPLE TEST 
// describe("Your refactored solution", () => {
//     it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
//       Test.assertEquals(describeAge(9), "You're a(n) kid");
//       Test.assertEquals(describeAge(10), "You're a(n) kid");
//       Test.assertEquals(describeAge(11), "You're a(n) kid");
//       Test.assertEquals(describeAge(12), "You're a(n) kid");
//       Test.assertEquals(describeAge(13), "You're a(n) teenager");
//       Test.assertEquals(describeAge(14), "You're a(n) teenager");
//       Test.assertEquals(describeAge(15), "You're a(n) teenager");
//       Test.assertEquals(describeAge(16), "You're a(n) teenager");
//       Test.assertEquals(describeAge(17), "You're a(n) teenager");
//       Test.assertEquals(describeAge(18), "You're a(n) adult");
//       Test.assertEquals(describeAge(19), "You're a(n) adult");
//       Test.assertEquals(describeAge(63), "You're a(n) adult");
//       Test.assertEquals(describeAge(64), "You're a(n) adult");
//       Test.assertEquals(describeAge(65), "You're a(n) elderly");
//       Test.assertEquals(describeAge(66), "You're a(n) elderly");
//       Test.assertEquals(describeAge(100), "You're a(n) elderly");
//     });
//   });

function describeAge(a){
    return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
    }