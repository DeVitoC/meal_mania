import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  return (
    <header className="search-container">
      <form>
        <input type="text" placeholder="find a meal by name" className="form-input" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </header>
  );
}

export default Search;