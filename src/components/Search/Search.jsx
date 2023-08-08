// import React from 'react'
import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className=" form">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for character "
        type="text"
        className="p-1"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary  fs-5 mx-2 p-1"
      >
        Search
      </button>{" "}
    </form>
  );
};

export default Search;
