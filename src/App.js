import "./App.css";
import { useState, useEffect } from "react";
import { citiesFilter } from "./utils/CitiesFilter";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";

function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const weatherApiKey = "17e23b96b1f34f329ad22138251501";
  const [showCityContainer, setShowCityContainer] = useState(false);

  const getWeather = async () => {
    setWeatherLoading(true);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );

      const result = await response.json();

      const weatherData = {
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
        precipitation: result.current.precip_mm,
        humidity: result.current.humidity,
      
      };
      console.log(result);
      setWeather(weatherData);
    } catch (error) {
      console.log("error", error);
    } finally {
      setWeatherLoading(false);
    }
  console.log(weather.result);
  
  };

  // console.log("API response:", result);
  // console.log("Weather data extracted:", weatherData);

  const handleChange = (event) => {
    setCountriesSearch(event.target.value);
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(event.target.value.toLocaleLowerCase())
        )
        .slice(0, 5)
    );
    setShowCityContainer(true);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city.split(",")[0]);
    setShowCityContainer(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const citiesAndCountry = citiesFilter(result.data);
      setCities(citiesAndCountry);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect worked");
    fetchData();
  }, []);

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="App h-screen flex flex-col md:flex-row relative">
      <LeftCard
        weather={weather}
        selectedCity={selectedCity}
        loading={loading}
        filteredData={filteredData}
        showCityContainer={showCityContainer}
        handleChange={handleChange}
        handleCityClick={handleCityClick}
      />

      <RightCard
      weather={weather}
      selectedCity={selectedCity}
      loading={loading}
      handleChange={handleChange}
      filteredData={filteredData}/>
    </div>
  );
}

export default App;
