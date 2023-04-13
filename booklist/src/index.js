import React from 'react';
import * as ReactDomClient from 'react-dom/client';

import './index.css';
import { data } from './books';
import SpecificBook from './Book';

function BookList() {
  return (
    <section className="booklist">
      {data.map(book => (
        <SpecificBook key={book.id} {...book}></SpecificBook>
      ))}
    </section>
  );
}

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(<BookList />);
