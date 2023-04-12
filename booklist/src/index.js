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
