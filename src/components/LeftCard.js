import React from "react";
import { formatDate } from "../utils/dateconvert";

const LeftCard = ({
  weather,
  selectedCity,
  loading,
  filteredData,
  showCityContainer,
  handleChange,
  handleCityClick,
}) => {
  return (
    <div className="w-full md:w-1/2 bg-[#F3F4F6] flex items-center justify-center p-6">
      <div className="w-[414px] h-[832px] rounded-[48px] bg-white z-20">
        <div className="w-[398px] h-[504px] flex flex-col">
          <div className="w-[174px] h-auto flex flex-col mt-[56px] ml-[48px] flex items-start">
            <p className="text-[18px] text-[#9CA3AF] font-medium">
              {formatDate(weather.date)}
            </p>
            <div className="flex flex-row w-[320px] h-auto justify-between">
              <p className="text-[48px] text-[#111827] font-extrabold items-center">
                {selectedCity}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#666666"
              >
                <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            </div>
            <img
              className="mt-[70px] ml-[60px]"
              src={weather.dayPhoto}
              alt={`Image depicting ${weather.condition}`}
            />
          </div>
        </div>
        <div className="w-[340px] h-auto flex flex-col ml-[48px] flex items-start">
          <p className="text-[90px] font-extrabold bg-gradient-to-b from-[#111827]  to-[#6B7280] bg-clip-text text-transparent m-0 p-0 leading-none  flex items-start">
            {weather.max_c !== undefined ? `${weather.max_c}°C` : "Loading..."}
          </p>
          <p className="text-[#FF8E27] text-[24px] font-extrabold text-left ml-[5px] m-0 leading-none">
            {weather.condition}
          </p>
        </div>
        <div className="ml-[48px] flex mt-[60px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#666666"
          >
            <path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" />
          </svg>
          <p className="text-[#9CA3AF]"> Humidity {weather.humidity} %</p>
        </div>
        <div className="ml-[48px] flex items-start mt-[10px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#666666"
          >
            <path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z" />
          </svg>
          <p className="text-[#9CA3AF]">
            {" "}
            Precipitation {weather.precipitation} mm
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="fixed top-[40px] left-[35%] flex items-center gap-5 bg-white w-[30%] h-20 rounded-[48px] shadow-md px-5 mt-10 z-20">
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
          disabled={loading}
          className="flex-grow text-[32px] focus:outline-none bg-transparent placeholder-gray-400"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>

      {/* Filtered Data */}
      {showCityContainer && (
        <div className="absolute top-[170px] left-[35%] w-[30%]  h-[220px] bg-white overflow-hidden rounded-3xl z-20">
          {filteredData.map((city, index) => (
            <div
              key={index}
              className="px-6 py-2 color-black hover:bg-gray-100 cursor-pointer text-3xl flex items-center gap-[20px]"
              onClick={() => handleCityClick(city)}
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
              <div>{city}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftCard;
