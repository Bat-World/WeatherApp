import "./App.css";
import { useState, useEffect, use } from "react";
import { citiesFilter } from "./utils/CitiesFilter";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import { getWeatherImageDay, getWeatherImageNight } from "./utils/Imgsutils";
import Back from "./components/Back";

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
  const [unit, setUnit] = useState("C"); 


  const getWeather = async () => {
    setWeatherLoading(true);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );

      const result = await response.json();

      const weatherData = {
        dayPhoto: getWeatherImageDay(
          result.forecast.forecastday[0].day.condition.text
        ),
        nightPhoto: getWeatherImageNight(
          result.forecast.forecastday[0].day.condition.text
        ),
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        max_f: result.forecast.forecastday[0].day.maxtemp_f,
        min_f: result.forecast.forecastday[0].day.mintemp_f,
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
    <div className="relative flex w-screen h-screen align-center justify-center overflow-hidden">
      {(loading || weatherLoading) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spinCustom"></div>
        </div>
      )}
      <Back />
      <div className=" w-2/4 h-screen bg-[#F3F4F6] flex justify-center items-center relative ">
        <LeftCard
          weather={weather}
          selectedCity={selectedCity}
          loading={loading}
          filteredData={filteredData}
          showCityContainer={showCityContainer}
          handleChange={handleChange}
          handleCityClick={handleCityClick}
          unit={unit}
          setUnit={setUnit}
        />
        <div className="absolute w-[128px] h-[128px] bg-[#FF8E27] rounded-full right-[62%] bottom-[78%] z-10"></div>
      </div>
      <div className=" w-2/4 h-screen bg-black flex justify-center items-center relative">
        <RightCard
          weather={weather}
          selectedCity={selectedCity}
          loading={loading}
          handleChange={handleChange}
          filteredData={filteredData}
          unit={unit}
          setUnit={setUnit}
        />
        <div className="absolute w-[128px] h-[128px] bg-[#6E72C9] rounded-full left-[62%] top-[78%] z-10 "></div>
      </div>
    </div>
  );
}

export default App;
