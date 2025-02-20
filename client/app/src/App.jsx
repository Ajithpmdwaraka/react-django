import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder="Book title" onChange={(e)} => setTitle(e.target.value) }  />
        <input type="number" placeholder="Release year" />
        <button type="submit">Add Book</button>
      </div>

      {books.map((book) => (
        <div key={book.id}>
          <h2>Book Title: {book.title}</h2>
          <p>Release Date: {book.released_year}</p>
        </div>
      ))}
    </>
  );
}

export default App;
