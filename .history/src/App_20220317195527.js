import React from "react";


function App(props) {
  <section className="booklist">
    {books.map((book) => {
      const { img, title, author } = book;
      return <Book book={book}></Book>;
    })}
  </section>;
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <div>
      <article className="book">
        <img src={img} alt="" />
        <h1> {title} </h1>
        <h4> {author} </h4>
      </article>
    </div>
  );
};

export default App;
