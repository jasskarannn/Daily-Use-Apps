let weather = {
    "apiKey" : "fe1f970bdaeb33b4d0fed52cf844f061",
    getWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city +
             "&units=metric&appid=" + this.apiKey
        ).then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0]; // since weather is an array so taking its 0th element which is an object containing keys icon and desciption
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".condition").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed;
        document.querySelector(".icon img").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
    },
    search : function(){
        var cityName = document.querySelector(".search-bar input").value;
        this.getWeather(cityName);
    }
}

document.querySelector(".search-bar .search-btn").addEventListener("click", function(){
    weather.search(); 
})

document.querySelector(".search-bar input").addEventListener("keypress",function(e){
    if(e.key == 'Enter'){
        weather.search(); 
    }
})
