import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=za&apiKey=${api_key}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
