import React  from "react";
export const citiesFilter = (countries) => {
  const citiesAndCountry = countries.data.flatMap((country) => country.cities.map((city) => `${city}, ${country.country}`))
    return <div>CitiesFilter</div>
}