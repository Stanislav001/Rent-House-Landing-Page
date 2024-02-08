import { housesData } from "../data";
import { filterHouses, getUniqueValues } from "../utils/helper";
import React, { useState, useContext, useEffect, useCallback } from "react";

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
    setCountries(getUniqueValues(houses, 'country'));
  }, [houses]);

  useEffect(() => {
    setProperties(getUniqueValues(houses, 'type'));
  }, [houses]);

  const handleClick = useCallback(() => {
    setLoading(true);

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const filteredResult = housesData.filter((house) => {
      return filterHouses(house, minPrice, maxPrice, country, property, price);
    });

    if (filteredResult?.length < 1) {
      setHouses([]);
    } else {
      setHouses(filteredResult);
    }

    setLoading(false);
  }, [country, property, price]);

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
