# Notes 💡

### React Component Behinds the Scene

```js
import React from 'react';
import ReactDom from 'react-dom';

// Capitalize the name of a function stands for a COMPONENT (Must capitalize the first letter!)
function Greeting() {
  // JSX
  // ⬇️ It is actually a 'function' (See GreetingFun() and the multiple tags scenario GreetingMulFun())
  return (
    <div>
      <h1>Hello the fucking world!</h1>
    </div>
  );
}

const GreetingFun = () => {
  return React.createElement('h1', {}, 'Hello world!');
};

// With multiple tags
const GreetingMultiFun = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello World')
  );
};

// 1. It is looking for what we're going to render. (of course the Greeting!)
// 2. Where we want to render it? (the id 'root' in index.html)
// 💡 Tips: We have to close the tag. (Even using the `img` tag)
ReactDom.render(<Greeting />, document.getElementById('root'));
```

### JSX Rules

- Return single element
- like div / section / article or Fragment
- Use camelCase for HTML attribute
- Use className instead of class
- Close every element
- formatting

```js
function Greeting() {
  // Using '()' when wrapping the lines
  return (
    // I think <React.Fragment> stands for a <div> ?
    // We can also use the shorthand <> to replace  <React.Fragment>
    // use camelCase: We're not gonna add 'onclick' to div, but 'onClick'
    <React.Fragment>
      <div>
        <h1>Hello the fucking world!</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">fucking</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
```

### Nested Components and Tools

```js
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

// We spilt the code into the chunks (so grace, right?)
const Person = () => <h1>Hi, I'm Lucas</h1>;
const Message = () => <p>This is my message</p>;

ReactDom.render(<Greeting />, document.getElementById('root'));
```
