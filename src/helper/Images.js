import Thunderstorm from "../assets/images/stormyy.png";
import Drizzle from "../assets/images/storm.png";
import Rain from "../assets/images/rain.png";
import Snow from "../assets/images/snow-globe.png";
import Atmosphere from "../assets/images/atmospheric.png";
import Clear from "../assets/images/sun.png";
import Clouds from "../assets/images/cloud.png";


const Images = ({code}) => {

  if(code >= 200 && code <232){
    return(
      <img src={Thunderstorm} alt="template"/>
      )

    }

    if(code >= 300 && code <321){
      return (
        <img src={Drizzle} alt="template"/>
        )

      }

      if(code >= 500 && code <531){
        return(
          <img src={Rain} alt="template"/>
          )

        }

        if(code >= 600 && code <622){
          return (
            <img src={Snow} alt="template"/>
            )
          }

          if(code >= 701 && code <781){
            return (
              <img src={Atmosphere} alt="template"/>
              )
            }

            if(code === 800){
              return (
                <img src={Clear} alt="template"/>
                )
              }

              if(code >= 801 && code <= 804){
                return (
                  <img src={Clouds} alt="template"/>
                  )
                }
              }

              export default Images;