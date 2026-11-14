
import { useSearchParams, useNavigate } from "react-router";
import "../search.css";
import {Search} from "lucide-react";

const results = [
  { title: "First Result", description: "A short description of this result." },
  { title: "Second Result", description: "Another interesting result." },
  { title: "Third Result", description: "Explore more information here." },
  { title: "Fourth Result", description: "Discover something new." },
  { title: "Fifth Result", description: "Additional content goes here." },
  { title: "Sixth Result", description: "More information to explore." },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q") || "";

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newQuery = formData.get("query")?.toString().trim();

    if (newQuery) {
      navigate(`/search?q=${encodeURIComponent(newQuery)}`);
    }
  }

  return (
    <main className="search-page">

        <form className="search-bar top-search" onSubmit={handleSearch}>
          <Search/>

          <input
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Search anything..."
            aria-label="Search"
          />

          <button type="submit" aria-label="Search">
          </button>
        </form>
      </header>

      <section className="results-section">
        <p className="results-label">
          Results for: <strong>{query}</strong>
        </p>

        <div className="results-grid">
          {results.map((result, index) => (
            <article className="result-card" key={index}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
