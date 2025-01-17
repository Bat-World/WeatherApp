// utils/WeatherImageUtils.js

export const getWeatherImageDay = (condition) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("clear")) {
      return "/images/sunny.sun.png";
    } else if (lowerCondition.includes("sunny")) {
      return "/images/sunny.sun.png";
    } else if (lowerCondition.includes("cloudy")) {
      return "/images/cloudy.sun.png";
    } else if (lowerCondition.includes("rain")) {
      return "/images/rainy.sun.png";
    } else {
      return "/images/snowing.sun.png";
    }
  };
  
  
  export const getWeatherImageNight = (condition) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("clear")) {
      return "/images/moon.png";
    } else if (lowerCondition.includes("sunny")) {
      return "/images/moon.png";
    } else if (lowerCondition.includes("cloudy")) {
      return "/images/cloudy.moon.png";
    } else if (lowerCondition.includes("rain")) {
      return "/images/raining.moon.png";
    } else {
      return "/images/snowing.moon.png";
    }
  };
  