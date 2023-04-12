import React from 'react';
// react 18 uses `ReactDOMClient.createRoot()`, instead of ReactDom.render()
// import ReactDom from 'react-dom';
import * as ReactDomClient from 'react-dom/client';

// CSS
import './index.css';
// const author = 'James Clear';
// const title = 'Atomic Habits';

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
  {
    id: 2,
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

// ReactDom.(<BookList />, document.getElementById('root'));
// Using New root API (react 18 feature) ⬇️
const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<BookList />);
