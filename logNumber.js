var num = 50;
 
function logNumber() {
    console.log(num);
    var num = 100;
}
 
logNumber(); // undefined, because num is hoiseted top of console.log hence
