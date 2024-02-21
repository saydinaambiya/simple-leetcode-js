/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  return {
      increment:()=> {
          console.log(init+1);
      },
      decrement: () => {
          console.log(init-1);
      },
      reset: () => {
          console.log(init);
      }
  }  
};

/*
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/
