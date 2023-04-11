import React from 'react';
import ReactDom from 'react-dom';

// Capitalize the name of a function stands for a COMPONENT (Must capitalize the first letter!)
function Greeting() {
  // JSX
  // ⬇️ It is actually a 'function' (See GreetingFun())
  return (
    <div>
      <h1>Hello the fucking world!</h1>
    </div>
  );
}

// const GreetingFun = () => {
//   return React.createElement('h1', {}, 'Hello world!');
// };

// With multiple tags
// const GreetingMultiFun = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

// 1. It is looking for what we're going to render. (of course the Greeting!)
// 2. Where we want to render it? (the id 'root' in index.html)
// 💡 Tips: We have to close the tag. (Even using the `img` tag)
ReactDom.render(<Greeting />, document.getElementById('root'));
