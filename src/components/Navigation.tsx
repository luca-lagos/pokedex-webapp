import React from "react";
import { RiSearchEyeFill as SearchIcon } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header className="container">
        <Link to={"/"} className="logo">
          <img src="images/pokedex-logo.png" alt="pokedex logo" />
        </Link>
        <form>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
            
              placeholder="Search your favourite pokemon"
            />
          </div>

          <button className="btn-search">
            <SearchIcon />
          </button>
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
