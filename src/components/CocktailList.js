import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    //no cocktail available matching the search criteria
    return <h2 className="section-title">No cocktails matched your search criteria</h2>;
  }

  return (
    <div>
      <h2>Cocktail List</h2>
    </div>
  );
};

export default CocktailList;
