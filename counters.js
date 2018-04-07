function myFunc() {
  let count = 0;
  
  //using clousure
  return function() {
    count++;
    return count;
  };
}
 
console.log(myFunc());
 
const instanceOne = myFunc(); //function invocation stored
const instanceTwo = myFunc();
 
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());

//Create function that will tell how many times it is running
