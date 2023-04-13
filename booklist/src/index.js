import React from 'react';
import * as ReactDomClient from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
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
      {books.map(book => (
        <Book key={book.id} {...book}></Book>
      ))}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = e => {
    // console.log(e.target);
    alert('Hello World!');
  };
  const complexExample = author => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log('I like you');
      }}
    >
      <img className="image" src={img} alt={title} />
      {/* We can also make event handler as inline way */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* We have reference `clickHandler` here ⬇️ */}
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      {/* It log in the console when rendering the page without any click event. */}
      {/* Why was that happening? */}
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<BookList />);
