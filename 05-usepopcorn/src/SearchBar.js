import { useRef } from "react";
import { useKey } from "./useKey";

export function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
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
