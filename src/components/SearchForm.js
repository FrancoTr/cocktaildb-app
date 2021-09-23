import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    //the moment the App renders, the search bar will have focus
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
