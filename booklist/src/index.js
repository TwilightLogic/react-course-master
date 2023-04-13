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
