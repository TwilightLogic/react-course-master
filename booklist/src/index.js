import React from 'react';
// react 18 uses `ReactDOMClient.createRoot()`, instead of ReactDom.render()
// import ReactDom from 'react-dom';
import * as ReactDomClient from 'react-dom/client';

// CSS
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      className="image"
      src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR300,450_.jpg"
      alt="Atomic Habits"
    />
  );
};

const Title = () => <h1>Atomic Habits</h1>;
const Author = () => (
  // To pass a JS object in JSX, we must wrap the object in another pair of curly braces ⬇️
  <h4 style={{ color: '#617d98', fontSize: '1.2rem', marginTop: '0.4rem' }}>
    James Clear
  </h4>
);

// ReactDom.(<BookList />, document.getElementById('root'));
// Using New root API (react 18 feature) ⬇️
const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<BookList />);
