function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     };
     body.appendChild(button);
   }
}
 
createButtons();


Another Solution using IIFE:-
  
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(number){
         button.onclick = function() {
          alert('This is button ' + i);
     };
     })(i);
     body.appendChild(button);
   }
}
 
createButtons();

//So in this case iffe will store i value in num hence it will return correct result.
