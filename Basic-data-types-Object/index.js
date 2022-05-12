// https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// SAMPLE TEST 

// describe("Tests", () => {
//     it("test", () => {
//       Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
//       Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
//       Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");
//     });
//   });
  
function animal(obj){
    return "This" + " " + obj.color + " " + obj.name + " " + "has" + " " + obj.legs + " " + "legs."
  }
  