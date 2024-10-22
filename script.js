const apiKey ="63a4bbeaa00a93e503e9ea9c1c681239";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
     
    if(response.status == 404){
        document.querySelector(".error-msg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        const data = await response.json();
        const results = data.results;
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+  "°c";
    
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed+" km/h";
        
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzel"){
            
            weatherIcon.src = "drizzel.png";
        }
        else if(data.weather[0].main == "Mist"){
            
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            
            weatherIcon.src = "snow.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error-msg").style.display = "none";
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
