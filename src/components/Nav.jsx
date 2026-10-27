import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/fes-logo.png";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const Nav = ({ setSearchData, setLoading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSubmit(formData) {
    const query = formData.get("searchInput");
    // React clears the form after submit, so keep the term to refill the input
    setSearchTerm(query);
    fetchMovies(query);

    // Go back to the results page if searching from a movie's details page
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  async function fetchMovies(query) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`,
    );

    setSearchData({
      // OMDB returns no Search array when nothing matches
      results: data.Search || [],
      query: query,
    });

    // Short artificial delay so the skeleton loading state is visible
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  // Show Avengers movies when the page first loads
  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="" className="logo__img" />
        <div className="logo__title">
          <span>Simplified</span> Flix
        </div>
      </div>

      <form
        action={handleSubmit}
        className="search-form"
        id="searchForm"
        name="searchForm"
      >
        <div className="search-form__group">
          <label htmlFor="searchInput"></label>
          <input
            className="search-form__input"
            type="text"
            name="searchInput" // Read by formData.get() in handleSubmit
            id="searchInput"
            placeholder="Search movies..."
            defaultValue={searchTerm}
            required
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Search"
          >
            <svg
              className="search-form__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Nav;
