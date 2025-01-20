import React from "react";
import { formatDate } from "../utils/dateconvert";

const RightCard = ({
  weather,
  selectedCity,
  loading,
  handleChange,
  filteredData,
  setUnit,
  unit,
}) => {
  const toggleUnit = (newUnit) => {
    setUnit(newUnit);
  };
  const displayTemp =
    unit === "C"
      ? weather.min_c !== undefined ? `${weather.min_c}°C`: "Loading..."
      : weather.min_f !== undefined ? `${weather.min_f}°F`: "Loading...";
  return (
    <div className="w-full md:w-1/2 bg-transparent from-gray-800 to-black flex items-center justify-center p-6">
      <div className="w-[414px] h-[832px] rounded-[48px] bg-[#111827]/75  flex flex-col z-20 backdrop-blur-md  ">
        <div className="w-[398px] h-[504px] flex flex-col">
          <div className="w-[174px] h-auto flex flex-col mt-[56px] ml-[48px] flex items-start">
            <p className="text-[18px] text-[#9CA3AF] font-medium">
              {formatDate(weather.date)}
            </p>

            <div className="flex flex-row w-[320px] h-auto justify-between">
              <p className="text-[48px] text-[#FFF] font-extrabold items-center">
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
              src={weather.nightPhoto}
              alt={`Image depicting ${weather.condition}`}
            />
          </div>
        </div>
        <div className="w-[340px] h-auto flex flex-col ml-[48px] flex items-start">
        <div className="flex direction-row gap-1">
            <button
              onClick={() => toggleUnit("C")}
              className={`text-[#9CA3AF] ${
                unit === "C" ? "font-bold underline" : ""
              }`}
            >
              °C |
            </button>
            <button
              onClick={() => toggleUnit("F")}
              className={`text-[#9CA3AF] ${
                unit === "F" ? "font-bold underline" : ""
              }`}
            >
              °F
            </button>
          </div>

          <p className="text-[90px] font-extrabold bg-gradient-to-b from-[#F9FAFB] via-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent m-0 p-0 leading-none mt-[10px]">
          {displayTemp}
          </p>
          <p className="text-[#777CCE] text-[24px] font-extrabold text-left ml-[5px] m-0 leading-none">
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
            <path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z" />
          </svg>
          <p className="text-[#9CA3AF]">
            {" "}
            Precipitation {weather.precipitation} mm
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default RightCard;
