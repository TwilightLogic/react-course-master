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

#### Props - Children

💡 Tips: We must name 'children' in Book component(children) while we are using nested content inside JSX in BookList component(parent)

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        book={{ title: 'Atomic Habits', author: 'James Clear' }}
        imgSrc={
          'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg'
        }
      >
        {/* We can add some tags or forward some parameters here. */}
        {/* This <p></p> here is considered as a 'parameter', */}
        {/* so we should also add another one argument in the Book component */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          reiciendis architecto consectetur nemo accusantium dolorem eveniet,
          soluta reprehenderit labore iste.
        </p>
      </Book>
    </section>
  );
}

const Book = ({ book, imgSrc, children }) => {
  return (
    <article className="book">
      <img className="image" src={imgSrc} alt={book.title} />
      <h1>{book.title}</h1>
      <h4>{book.author}</h4>
      {children}
    </article>
  );
};
```

### Rendering Lists

#### Simple List

1. Put `books` object in an array

```js
const books = [
  {
    id: 0,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IJiOOyb1L._AC_UL900_SR300,450_.jpg',
    title: 'Outlive',
    author: 'Peter Attia MD',
  },
];
```

2. Map `books` members into a new array o JSX nodes, and return it as `newNames`. (Remember: Array.prototype.map() is going to return a new array)

```js
const names = ['John', 'Lucas', 'Harry'];
const newNames = names.map(name => <h1>{name}</h1>);
```

Here is the results:

```js
import React from 'react';
import * as ReactDomClient from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 0,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IJiOOyb1L._AC_UL900_SR300,450_.jpg',
    title: 'Outlive',
    author: 'Peter Attia MD',
  },
];

const names = ['John', 'Lucas', 'Harry'];
const newNames = names.map(name => <h1>{name}</h1>);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = props => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
```

#### Proper List

Nothing new.
It is just finished our demo by using map(). (Yeah, that's what I think).

```js
import React from 'react';
import * as ReactDomClient from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },f
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IJiOOyb1L._AC_UL900_SR300,450_.jpg',
    title: 'Outlive',
    author: 'Peter Attia MD',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL900_SR300,450_.jpg',
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {/* It forwarding a `book` object to parent component(Book) */}
      {books.map(book => (
        <Book book={book}></Book>
      ))}
    </section>
  );
}

// Every time `Book` component accepts a `book` object from `BookList` component
// So we can see 3 results are returned in the log of browser
const Book = props => {
  console.log(props);

  // `book` is an object of `props`
  // We are not destructing the `props`
  // Actually, we are destructing the 'book'
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
```

### Key Prop and Spread Operator

#### Key Prop

⚠️ JSX elements directly inside a map() call always need keys!

We should always include the `key` in our data

```js
function BookList() {
  return (
    <section className="booklist">
      {/* It forwarding a `book` object to parent component(Book) */}
      {books.map(book => (
        <Book key={book.id} book={book}></Book>
      ))}
    </section>
  );
}
```

And we can also add `index` as parameter in map()

```js
function BookList() {
  return (
    <section className="booklist">
      {/* It forwarding a `book` object to parent component(Book) */}
      {books.map((book, index) => (
        <Book key={index} book={book}></Book>
      ))}
    </section>
  );
}
```

#### Spread Operator

Sometimes, passing props gets very repetitive:

```js
function BookList() {
  return (
    <section className="booklist">
      {/* It forwarding a `book` object to parent component(Book) */}
      {books.map((book, index) => (
        <Book key={index} img={img} title={title} author={author}></Book>
      ))}
    </section>
  );
}
```

We can also use ES6 feature `Spread Operator` (which is more concise):

```js
function BookList() {
  return (
    <section className="booklist">
      {/* It forwarding a `book` object to parent component(Book) */}
      {books.map((book, index) => (
        <Book key={index} {...book}></Book>
      ))}
    </section>
  );
}
```

> ❓ OK, so here is the **question**:
> What's the difference between the parameter `{...book}` and `book={book}` in `<Book />`
>
> - I think `{book}` is an object that is assigned to the `book` variable(object) in `book={book}` expression.
> - So the `book` here is an object that contains data in another object.
> - The `{...book}` will forward the entry instead.
> - So it forward the data object itself, not the object of object.

So we will refactor the code like this:

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => (
        <Book key={book.id} {...book}></Book>
      ))}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```
