import React from 'react';
import ReactDom from 'react-dom';

// Capitalize the name of a function stands for a COMPONENT (Must capitalize the first letter!)
function Greeting() {
  // JSX
  return (
    <div>
      <h1>Hello the fucking world!</h1>
    </div>
  );
}

// 1. It is looking for what we're going to render. (of course the Greeting!)
// 2. Where we want to render it? (the id 'root' in index.html)
// 💡 Tips: We have to close the tag. (Even using the `img` tag)
ReactDom.render(<Greeting />, document.getElementById('root'));
