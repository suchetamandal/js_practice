var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2); // Tampa (as string is primitive types and theya re passed by value)
 
 
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';
 
console.log(person1); // Kyle (as objects are always passed by reference)
