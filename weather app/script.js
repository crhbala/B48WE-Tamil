//api key
let apiKey = "9b3abd72af5e8ee4c215adb53b59b0e5";
//weather api
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let searchBox = document.querySelector(".search input"); 
let searchBtn = document.querySelector(".search button");   
let weatherIcon = document.querySelector(".Weather-icon");
//weather fetching, chenking and update in inner html
async function checkWeather(city) {
    const responce = await fetch(api + city + `&appid=${apiKey}`);
 //city name check the city name valid or invalid
    if (responce.status == 404) {
        //invalid city updates

        //error data block updation in stylesheet display
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
        document.querySelector(".card").style.background = `linear-gradient(135deg,#f8c302, #0f8cdf)`;
    } else {
        //valid city updates
        let data = await responce.json();
        //weather changes in inner html
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        //weather icon and background color chenges
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
         document.querySelector(".card").style.background = `linear-gradient(135deg,#0f294d, #009bfc)`;
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        document.querySelector(".card").style.background = `linear-gradient(135deg,#f8c302, #0f8cdf)`;
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
         document.querySelector(".card").style.background = `linear-gradient(135deg,#0f294d, #009bfc)`;
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".card").style.background = `linear-gradient(135deg,#f8c302, #0f8cdf)`;
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
         document.querySelector(".card").style.background = `linear-gradient(135deg,#0f294d, #009bfc)`;
       
        }
        //error data none updation 
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        console.log(data);

    }
   
}
//get city name
searchBtn. addEventListener("click", () => {
    checkWeather(searchBox.value);
})