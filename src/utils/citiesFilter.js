export const citiesFilter = (countries) => {
  return countries.flatMap((country) =>
    country.cities.map((city) => `${city}, ${country.country}`)
  );
};