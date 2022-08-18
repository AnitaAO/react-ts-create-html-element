import * as React from 'react';
import './style.css';

//Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).

// - Create a new h1 element
// - Give it some textContent
// - Give it a class name of  "header"
// - append it as a child of the div#root

const h1 = document.createElement("h1")
h1.textContent = "I am growing reactively!"
h1.className = "header"
document.getElementById("root").append(h1)

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h3>{h1.textContent}</h3>  
    </div>
  );
}
