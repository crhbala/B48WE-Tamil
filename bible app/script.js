
//bible api
let api = "https://bible-api.com/";


let searchBox = document.querySelector(".search input"); 
let searchBtn = document.querySelector(".search button");   
// fetching, chenking and update in inner html
async function checkWeather(bible) {
    const responce = await fetch(api + bible)
   if (responce.status === 404) {
        //error data block updation in stylesheet display
        document.querySelector(".error").style.display = "block";
        document.querySelector(".bible").style.display = "none";
   }
   else {
        //valid bible updates
        let data = await responce.json();
        //verses changes in inner html
        console.log(data);
    document.querySelector(".reference").innerHTML = data.reference;
       document.querySelector(".bibleVerse").innerHTML = data.verses[0].text;
        //error data none updation 
        document.querySelector(".bible").style.display = "block";
        document.querySelector(".error").style.display = "none";
       
        }
       
       
 }
   
//get bible name
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});