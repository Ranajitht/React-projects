// src/BookSearch.js
import React, { useState } from "react";
import axios from "axios";

function BookSearchApp() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      setBooks(response.data.docs);
      console.log(response.data.docs);
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book"
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4 flex flex-col">
        {books.map((book) => (
          <li key={book.key} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p>{book.author_name?.join(", ")}</p>
            <p>{book.first_publish_year}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearchApp;
