import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
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
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

// Export a `Book` react component here
export default Book;
