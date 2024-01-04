
var search_input=document.querySelector(".search input");
var search_btn=document.querySelector(".search button");
var weather_icon=document.querySelector(".w-icon");
async function getWeather(city){
    var res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be4f74df092fa7f0423a34aa0a384e0f&units=metric`)
    
    if(res.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    var data=await res.json()
        console.log(data);
        document.querySelector(".celsius").innerHTML=Math.round(data.main.temp)+" °C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+" %";
        document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" km/h";  

        if(data.weather[0].main=="Clouds"){
            weather_icon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Mist"){
            weather_icon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Clear"){
            weather_icon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weather_icon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weather_icon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weather_icon.src="images/snow.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
}


search_btn.addEventListener("click",()=>{
    getWeather(search_input.value)
}
);
    


   