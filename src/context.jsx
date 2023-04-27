import axios from "axios";
import React, {Children, useContext, useState} from "react";
import { useEffect } from "react";

const AppContext = React.createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (url) => {
    try {
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.log(error.response);
    }
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

  return <AppContext.Provider value={{meals}}>
    { children }
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }