const API_KEY = "123cedf472ea7d740a81046892916adb";
let some ; 
let sun_img= `<img style="width:40px;" src="../image-home/Sun.jpg" alt=""/>`
async function getApi(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((item) => {
            for (const res in item) {
              some = Math.floor(item[res]["feels_like"] / 10);
              // console.log(`${some}°C`);
              switch (some) {
                case some:
                  document.getElementById("weather").innerHTML += `<div class="text-warning fw-bold fs-4">${some}°C ${sun_img}</div>`;
                  document.getElementById("weather2").innerHTML += `<div class=" fw-bold fs-5 text-opacity-75 "style="">${some}°C ${sun_img}</div>`;
                  break;
                default:
                  break;
              }
            }
          });
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getApi();