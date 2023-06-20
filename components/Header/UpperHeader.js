import { useState, useEffect } from "react";
import styles from "./UpperHeader.module.scss";
import Image from "next/image";

function UpperHeader() {
  const [location, setLocation] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation API is not supported in this browser");
      getWeather("melbourne");
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    if (lat && lon) {
      getWeather([lat, lon]);
    } else {
      getWeather("melbourne");
    }
  };

  const getWeather = async (location) => {
    let url;
    if (Array.isArray(location)) {
      url = `https://api.weatherapi.com/v1/current.json?q=${location[0].toString()},${location[1].toString()}&key=${
        process.env.NEXT_PUBLIC_WEATHER_API_KEY
      }`;
    } else if (location === "melbourne") {
      url = `https://api.weatherapi.com/v1/current.json?q=${location}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    } else {
      console.log("Location is unavailable");
      return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

        console.log("#############data is", data);

      if (data.current) {
        setLocation(data.location.name);
        setCurrentCondition(data.current.condition.text);
        setTemp(data.current.temp_c);
        setIcon(data.current.condition.icon);
      } else {
        console.log("Current weather data is unavailable");
      }
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };



  return (
    <div className={styles.upper_header}>
      <Image
        src="/NN_LOGO.png"
        width={90}
        height={90}
        className={styles.logo}
        alt="Nuts news logo"
      />

      {location && currentCondition && (
        <div className={styles.weather}>
          <div className={styles.icon}>
            <Image
              src={`https:${icon}`}
              width={50}
              height={50}
              alt="weather icon"
            />
          </div>
          <div className={styles.location}>{location}</div>
          <div className={styles.temp}>{temp}°C</div>
          <div className={styles.condition}>{currentCondition}</div>
        </div>
      )}
    </div>
  );
}

export default UpperHeader;
