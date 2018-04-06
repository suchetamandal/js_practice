tripple = (num1 => {
  return(num2 =>{
    return(num3 => {
      return num1+num2+num3;
    })
  })
});

tripple(20)(30)(40)
