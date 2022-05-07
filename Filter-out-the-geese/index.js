// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


// SAMPLE TextDecoderStreamdescribe("Basic tests",function(){
//     it("Mixed list",function(){
//       Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//     });
//     it("No geese",function(){
//       Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//     });
//     it("All geese",function(){
//       Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
//     });
//   });

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
    //filter list containing all of the same element
    // return an array containing all of the strings in the input array except those that match strings in geese 
    //include method determines whether an array includes a certain value among its entries
    return birds.filter(a => !geese.includes(a))
  };
  
  