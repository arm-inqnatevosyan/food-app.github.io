import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [isLoading,setLoadng] = useState(false);
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  
  const searchRecipes = async () => {
    setLoadng(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setLoadng(false);
  };
  
  useEffect(() => {
    searchRecipes();
  },[])

  const handleSubmit = event =>{
    event.preventDefault();
    searchRecipes()
  }
  return (
    <div className="container">
      <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
    <div className="recipes">
      {recipes ? recipes.map(recipe => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
        />
      )):"No recipe !"}
    </div>

    </div>
  )
}

export default App;