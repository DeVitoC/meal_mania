import axios from "axios";
import React, {Children, useContext, useState} from "react";
import { useEffect } from "react";

const AppContext = React.createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMeals = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios(url);

      if(data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }

    } catch (error) {
      console.log(error.response);
    }

    setLoading(false);
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealURL);
  }

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://randomuser.me/api/");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(()=>{
    fetchMeals(allMealsURL);
  },[])

  useEffect(() => {
    fetchMeals(allMealsURL);
  }, [])

  useEffect(() => {
    if(!searchTerm) return;
    fetchMeals(`${allMealsURL}${searchTerm}`);
  }, [searchTerm]) 

  return <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal}}>
    { children }
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }