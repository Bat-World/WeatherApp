import "./App.css";
import { useState, useEffect } from "react";
import { citiesFilter } from "./utils/citiesFilter";
function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    setCountriesSearch(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const citiesAndCountry = citiesFilter(result.data);
  
        setCities(citiesAndCountry);
        setFilteredData(citiesAndCountry);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterData = () => {
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(countriesSearch.toLocaleLowerCase())
        )
        .slice(0, 5)
    );
  };

  useEffect(() => {
    console.log("useEffect worked");
    fetchData();
  }, []);

  return (
    <div className="App h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center p-6 relative">
        <div className="w-[567px] h-20 rounded-[48px] absolute left-10 top-20 focus:outline-none bg-white flex direction-row items-center pl-[20px] gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search  text-gray-500"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="#6B7280"
              fill="none"
              strokeWidth="2px"
            ></circle>
            <path
              d="m21 21-4.3-4.3"
              stroke="#6B7280"
              fill="none"
              strokeWidth="2px"
            ></path>
          </svg>
          <input
            className="w-[450px] h-20  focus:outline-none focus:border-0 text-[32px]  bg-transparent"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
        <div className="absolute top-[250px] left-[50px] w-[100px] h-auto bg-transparent">
          {countriesData.map((country, index) => {
            return <div key={index}> {country.country} </div>;
          })}
        </div>

        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">City</h1>
          <p className="text-2xl text-gray-600 mb-1">26°</p>
          <p className="text-orange-500 text-lg">Bright</p>
        </div> */}
      </div>

      <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center p-6">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">City</h1>
          <p className="text-2xl text-gray-300 mb-1">17°</p>
          <p className="text-blue-400 text-lg">Clear</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
