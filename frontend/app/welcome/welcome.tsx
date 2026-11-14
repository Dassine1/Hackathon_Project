import { useNavigate } from "react-router";
import "../home.css";

import {Search} from "lucide-react";
import {FaGithub} from "react-icons/fa";

export function Welcome() {
 const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      navigate("/search?q=${encodeURIComponent(query)}");
    }
  }
  return (
    <main className="homepage">
      <div className="home-content">
        <div className="main-icon">
          <FaGithub size={32}/>
        </div>

        <h1>Search Easily</h1>

        <p className="description">
          You can search GitHub Projects, download them, and more. All in a small search!
          </p>
        <form 
        className="search-bar"
        onSubmit={handleSearch}
        >
          <span></span>
          <input 
            type="text"
            placeholder="Search any Project..."
            aria-label="Search"
          />
          <button type="submit" aria-label="Search"><Search/></button>
        </form>
      </div>
    </main>
  );
}
