
// var createCounter = function(n) {
//   count=n;
  
//   return function() {
//       return count++
      
//   };
// };

// counter=createCounter(10);
// console.log(counter());
// console.log(counter());


function expect(val) {
  return {
    toBe: function (expectedVal) {
      if (val === expectedVal) {
        console.log("Values are equal!");
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expectedVal) {
      if (val !== expectedVal) {
        console.log("Values are not equal!");
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Example Usage:
try {
  expect(5).toBe(5); // Output: Values are equal!
  expect(5).notToBe(10); // Output: Values are not equal!
  expect(5).toBe(10); // Throws Error: "Not Equal"
} catch (error) {
  console.error(error.message);
}
