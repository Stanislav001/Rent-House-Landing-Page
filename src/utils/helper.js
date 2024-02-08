export const filterHouses = (
  house,
  minPrice,
  maxPrice,
  country,
  property,
  price
) => {
  const isDefault = (input) => {
    return input?.split(" ").includes("(any)");
  };

  const housePrice = parseInt(house.price);

  const matchesCountry = isDefault(country) || house.country === country;
  const matchesProperty = isDefault(property) || house.type === property;
  const matchesPriceRange =
    isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

  return matchesCountry && matchesProperty && matchesPriceRange;
};

export const getUniqueValues = (data, key) => {
  const allValues = data.map((item) => item[key]);
  return ["Location (any)", ...new Set(allValues)];
};
