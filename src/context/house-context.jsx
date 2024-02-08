/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, createContext } from "react";

import { housesData } from "../data";

const HouseContext = React.createContext();

export function useHouse() {
  return useContext(HouseContext);
}

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })

    const uniqueCountries = ['Location (any)', ... new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [])

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })

    const uniqueProperties = ['Location (any)', ... new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [])

  const handleClick = () => {

  }

  return (
    <HouseContext.Provider
      value={{
        countries,
        setCountries,
        country,
        setCountry,
        property,
        setProperty,
        properties,
        setProperties,
        houses,
        setHouses,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
