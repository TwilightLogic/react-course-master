import React from 'react';
import ReactDom from 'react-dom';

// Capitalize the name of a function stands for a COMPONENT
function Greeting() {
  // JSX
  return <h1>Hello the fucking world!</h1>;
}

// 1. It is looking for what we're going to render. (of course the Greeting!)
// 2. Where we want to render it? (the id 'root' in index.html)
ReactDom.render(<Greeting />, document.getElementById('root'));
