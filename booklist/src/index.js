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

// ReactDom.(<BookList />, document.getElementById('root'));
// Using New root API (react 18 feature) ⬇️
const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<BookList />);
