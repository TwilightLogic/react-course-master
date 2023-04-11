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
