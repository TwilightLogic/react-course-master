import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR900,600_.jpg"
      alt="Atomic Habits"
    />
  );
};

const Title = () => <h1>Atomic Habits</h1>;

const Author = () => <h4>James Clear</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
