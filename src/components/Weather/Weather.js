import { useEffect, useState } from "react";
import Images from "../../helper/Images";

import "./weather.css";

function Weather() {

  const [city, setCity] = useState("Tashkent");
  const [data, setData] = useState({
    isFetched:false,
    data:{},
    error:false
  })

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e26a8ae22cdd66dfc7322b2f16f6b65&units=metric`)
    .then((response) => response.json())
    .then((data) => setData({
      isFetched: true,
      data:data,
      error:false
    }))
  }, [city])

  function handleSearch(evt){
    if(evt.code === "Enter"){
      setCity(evt.target.value)
    }
  }

  return (
    <div className="weather-wrapper">

    <input className="input" onKeyUp={handleSearch} type="text" placeholder="Search your location"/>

    {
      data.isFetched ?(

        <>
        <h2 className="title">{data.data.name}</h2>
        <Images code={data.data.weather[0].id}/>
        <h3 className="description">{data.data.weather[0].description}</h3>
        <p className="temp">{Math.ceil(data.data.main.temp)} <sup>o</sup> C</p>
        </>
        ) : ( <h2>Loading</h2>)
      }
      </div>

      )
    }

    export default Weather;
