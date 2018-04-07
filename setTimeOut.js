function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
logNumbers();

output will be :-
1,4,3,2

setTimeOut() will push function execution to an event stack (the call back function).
