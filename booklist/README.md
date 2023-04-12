# Notes

### Add inline style in javascript

💡 Tips: The inline css has the highest priority

```js
const Author = () => (
  // To pass a JS object in JSX, we must wrap the object in another pair of curly braces ⬇️
  <h4 style={{ color: '#617d98', fontSize: '1.2rem', marginTop: '0.4rem' }}>
    James Clear
  </h4>
);
```

### Don't hard code

We can access the data while using curly bracket (can also chain methods)

💡 Tips: The content inside the curly bracket is an EXPRESSION (no statement)

```js
const Book = () => {
  const title = 'Atomic Habits';
  return (
    <article className="book">
      <img
        className="image"
        src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg"
        alt="Atomic Habits"
      />
      <h1>{title}</h1>
      <h4>James Clear</h4>
    </article>
  );
};
```

### Props

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. We can pass any JavaScript value through them, including objects, arrays, and functions.

Props serve the same role as arguments serve for functions—in fact, props are the only argument to your component.

```js
import React from 'react';
// react 18 uses `ReactDOMClient.createRoot()`, instead of ReactDom.render()
// import ReactDom from 'react-dom';
import * as ReactDomClient from 'react-dom/client';

// CSS
import './index.css';
// const author = 'James Clear';
// const title = 'Atomic Habits';

function BookList() {
  return (
    <section className="booklist">
      <Book
        book={{ title: 'Atomic Habits', author: 'James Clear' }}
        imgSrc={
          'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg'
        }
      />
    </section>
  );
}

const Book = ({ book, imgSrc }) => {
  return (
    <article className="book">
      <img className="image" src={imgSrc} alt={book.title} />
      <h1>{book.title}</h1>
      <h4>{book.author}</h4>
    </article>
  );
};

// ReactDom.(<BookList />, document.getElementById('root'));
// Using New root API (react 18 feature) ⬇️
const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<BookList />);
```

Actually, it is a destructing syntax.

It's totally equivalent ⬆️ ⬇️

```js
const Book = props => {
  return (
    <article className="book">
      <img className="image" src={props.imgSrc} alt={props.book.title} />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};
```
