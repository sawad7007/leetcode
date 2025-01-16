
var createCounter = function(n) {
  count=n;
  
  return function() {
      return count++
      
  };
};

counter=createCounter(10);
console.log(counter());
console.log(counter());