tripple = (num1 => {
  return(num2 =>{
    return(num3 => {
      return num1+num2+num3;
    })
  })
});

tripple(20)(30)(40)

function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
quadrupleAdd(10)(20)(30, 40);


/* Currying Functions */
when a function, instead of taking all arguments at one time,
takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

