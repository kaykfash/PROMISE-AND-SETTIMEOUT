#What are side effects in programming?
Side Effect in programming is when there is  a change in the program's state caused by an expression or a function call, or modification of a global variable in a procedure or function


#Example of Side Effect in JavaScript:
##DOM manipulation:
<p id="header-text">Welcome to the Jungle</p>

 <script>
const headerTedxt = document.getElementById('header-text')
console.log(headerTedxt ) //<p header-text">Welcome to the Jungle</p> 
 </script>

 ##Changing  an external variable in any way:
  Array:

let numNames=["comfort", "Emmanuel", "Chris", "Dele"]
console.log(numNames);
numNames.push("Kenny");
console.log(numNames);

 ["comfort", "Emmanuel", "Chris", "Dele","Kenny"]