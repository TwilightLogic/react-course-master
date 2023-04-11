import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <h1>Hello the fucking world!</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
