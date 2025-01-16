
// var createCounter = function(n) {
//   count=n;
  
//   return function() {
//       return count++
      
//   };
// };

// counter=createCounter(10);
// console.log(counter());
// console.log(counter());


// function expect(val) {
//   return {
//     toBe: function (expectedVal) {
//       if (val === expectedVal) {
//         console.log("Values are equal!");
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe: function (expectedVal) {
//       if (val !== expectedVal) {
//         console.log("Values are not equal!");
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// }

// // Example Usage:
// try {
//   expect(5).toBe(5); // Output: Values are equal!
//   expect(5).notToBe(10); // Output: Values are not equal!
//   expect(5).toBe(10); // Throws Error: "Not Equal"
// } catch (error) {
//   console.error(error.message);
// }

function createCounter(init) {
  let currentValue = init; // Initialize the current value with the given init value

  return {
    increment: function () {
      currentValue += 1; // Increase currentValue by 1
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1; // Decrease currentValue by 1
      return currentValue;
    },
    reset: function () {
      currentValue = init; // Reset currentValue to the initial value
      return currentValue;
    },
  };
}

// Example Usage:
const counter = createCounter(5);

console.log(counter.increment()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4
