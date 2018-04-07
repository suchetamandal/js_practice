(function() {
  var x = y = 200;
})();
 
console.log('y: ', y);
console.log('x: ', x);

Output:-
-------------------
y:  200
ReferenceError: x is not defined
    at eval:6:20
    at eval
    at new Promise
    
Explanation:-
------------------------------
Actually under the hood, it is working as
y = 200; (y is in global scope)
var x = y; (var is scopes to the function only)
