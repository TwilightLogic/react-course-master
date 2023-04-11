import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Hi, I'm Lucas</h1>;
const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById('root'));
