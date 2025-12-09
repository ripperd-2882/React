import { useEffect } from "react";

export function SearchBar({ query, setQuery }) {
  useEffect(function () {
    const el = document.querySelector(".search");
    el.focus();
  }, []);

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <button
          className="btn-clear"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
