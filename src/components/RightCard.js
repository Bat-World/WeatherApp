const RightCard = ({
  weather,
  selectedCity,
  loading,
  handleChange,
  filteredData,
}) => {
  return (
    <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center p-6">
      <div className="w-[414px] h-[832px] rounded-[48px] bg-[rgba(17,24,39,0.75)] flex flex-col">
        <div className="w-[398px] h-[504px] flex flex-col">
          <div className="w-[174px] h-auto flex flex-col mt-[56px] ml-[48px] flex items-start">
            <p className="text-[18px] text-[#9CA3AF] font-medium">
              {weather.date}
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

            <img className="mt-[70px]" src="moon.png" alt="Image of the moon" />
          </div>
        </div>
        <div className="w-[340px] h-[230px] flex flex-col ml-[48px] flex items-start">
          <p className="text-[90px] font-extrabold bg-gradient-to-b from-[#F9FAFB] via-[#F9FAFB] to-[#F9FAFB00] bg-clip-text text-transparent m-0 p-0 leading-none">
            {weather.min_c !== undefined ? `${weather.max_c}°C` : "Loading..."}
          </p>
          <p className="text-[#777CCE] text-[24px] font-extrabold text-left ml-[5px] m-0 leading-none">
            {weather.condition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
