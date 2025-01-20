
import { getWeatherData } from "./utils/WeatherUtils";
import { citiesFilter } from "./utils/CitiesFilter";
import { useState, useEffect, use } from "react";
import RightCard from "./components/RightCard";
import LeftCard from "./components/LeftCard";
import Back from "./components/Back";
import "./App.css";

function App() {
  const [showCityContainer, setShowCityContainer] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [countriesSearch, setCountriesSearch] = useState("");
  const weatherApiKey = "17e23b96b1f34f329ad22138251501";
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [cities, setCities] = useState([]);
  const [unit, setUnit] = useState("C");

  const getWeather = async () => {
    setWeatherLoading(true);
  
    try {
      const weatherData = await getWeatherData(weatherApiKey, selectedCity);
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

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
    <div className="relative flex w-screen h-screen align-center justify-center overflow-hidden">
      {(loading || weatherLoading) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spinCustom"></div>
        </div>
      )}
      <Back />
      <div className=" w-2/4 h-screen bg-[#F3F4F6] flex justify-center items-center relative ">
        <LeftCard
          showCityContainer={showCityContainer}
          handleCityClick={handleCityClick}
          filteredData={filteredData}
          handleChange={handleChange}
          selectedCity={selectedCity}
          setUnit={setUnit}
          weather={weather}
          loading={loading}
          unit={unit}
        />
        <div className="absolute w-[128px] h-[128px] bg-[#FF8E27] rounded-full right-[62%] bottom-[78%] z-10"></div>
      </div>
      <div className=" w-2/4 h-screen bg-black flex justify-center items-center relative">
        <RightCard
          selectedCity={selectedCity}
          handleChange={handleChange}
          filteredData={filteredData}
          weather={weather}
          loading={loading}
          setUnit={setUnit}
          unit={unit}
        />
        <div className="absolute w-[128px] h-[128px] bg-[#6E72C9] rounded-full left-[62%] top-[78%] z-10 "></div>
      </div>
    </div>
  );
}

export default App;
