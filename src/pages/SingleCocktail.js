import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const { loading, setLoading } = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
          } = data.drinks[0];
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  return (
    <div>
      <h2>Single cocktail page</h2>
    </div>
  );
};

export default SingleCocktail;
