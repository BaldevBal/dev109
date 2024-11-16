function addItem(){
  
var newItem = document.getElementById('items').value; //created new 'items' variable

var newEl = document.createElement('li'); // Create a new element and store it in a variable.

var newText = document.createTextNode(newItem); // Create a text node and store it in a variable.

newEl.appendChild(newText); // Attach the new text node to the new element.

var position = document.getElementsByTagName('ul')[0]; // Find the position where the new element should be added.

position.appendChild(newEl);} // Insert the new element into its position. And wrapped it all in a function.
