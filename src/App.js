import "./App.css";
import { useState, useEffect } from "react";
import { citiesFilter } from "./utils/CitiesFilter";
function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    setCountriesSearch(event.target.value);
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
    filterData();
  }, [countriesSearch]);

  useEffect(() => {
    console.log("useEffect worked");
    fetchData();
  }, []);

  return (
    <div className="App h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#F3F4F6] from-gray-100 to-gray-300 flex items-center justify-center p-6">
        <div className="w-[414px] h-[832px] rounded-[48px] bg-[rgba(255, 255, 255, 0.75)]">
          <div className="w-[398px] h-[504px] flex flex-col">
            <div className="w-[174px] h-auto flex flex-col mt-[56px] ml-[48px]">
              <p className="text-[18px] text-[#9CA3AF] font-medium">
                September 10, 2021
              </p>
              <p className="text-[48px] text-[#111827] font-extrabold">
                Seattle
              </p>
            </div>
          </div>
          <div className="w-[215px] h-[230px] flex flex-col ml-[48px]">
            <p className="text-[144px] font-extrabold bg-gradient-to-b from-[#111827] via-[#F9FAFB] to-[#6B7280] bg-clip-text text-transparent m-0 p-0 leading-none">
              17°
            </p>
            <p className="text-[#FF8E27] text-[24px] font-extrabold text-left ml-[5px] m-0 leading-none">
              Bright
            </p>
          </div>
        </div>
        {/* Input */}
        <div className="fixed top-[40px] left-[830px] flex items-center gap-5 bg-white w-[567px] h-20 rounded-[48px] shadow-md px-5 mt-10">
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
            className="text-gray-500"
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
            className="flex-grow text-[32px] focus:outline-none bg-transparent placeholder-gray-400"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Filtered Data */}
      <div className="fixed top-[170px] left-[830px] w-[567px]  h-[220px] bg-white overflow-hidden rounded-3xl">
        {filteredData.map((city, index) => (
          <div
            key={index}
            className="px-6 py-2 color-black  hover:bg-gray-100 cursor-pointer text-3xl flex items-center gap-[20px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#666666"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            {city}
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center p-6">
        <div className="w-[414px] h-[832px] rounded-[48px] bg-[rgba(17,24,39,0.75)] flex flex-col">
          <div className="w-[398px] h-[504px] flex flex-col">
            <div className="w-[174px] h-auto flex flex-col mt-[56px] ml-[48px]">
              <p className="text-[18px] text-[#9CA3AF] font-medium">
                September 10, 2021
              </p>
              <p className="text-[48px] text-[#FFF] font-extrabold">Seattle</p>

              <img src="moon.png" alt="Image of the moon" />
            </div>
          </div>
          <div className="w-[215px] h-[230px] flex flex-col ml-[48px]">
            <p className="text-[144px] font-extrabold bg-gradient-to-b from-[#F9FAFB] via-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent m-0 p-0 leading-none">
              17°
            </p>
            <p className="text-[#777CCE] text-[24px] font-extrabold text-left ml-[5px] m-0 leading-none">
              Clear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
