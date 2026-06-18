document.getElementById("greeting").innerHTML = ("Hello, World!");

document.querySelector("#open-nav-menu").addEventListener("click", function(){ 
    document.querySelector("header nav .wrapper").classList.add("nav-open");  
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){ 
    document.querySelector("header nav .wrapper").classList.remove("nav-open");  
});

// Dynamic Information Needed
// Time of day
// Current weather conditions
// Location
// Temperature
// The weather is cloudy in London and it's 22°C outside. 

const greetingText = "Ohayo!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.8673;
// let weatherText;

function celsiusToFahr(temperature) {
    let fahr = (temperature * 1.8) + 32
    return fahr
}

document.querySelector("#greeting").innerHTML = greetingText;

document.querySelector(".weather-group").addEventListener("click", function(e) {
    // console.log(e.target.id) // outputs either celsius or fahr
    if(e.target.id == "fahr") {
        weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(Math.floor(temperature))}°F outside.`
    } else {
        weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${Math.floor(temperature)}°C outside.`
    }
    document.querySelector("p#weather").innerHTML = weatherText;
});


setInterval(function() {
    // for CSS selectors, you may use square brackets to target specific attributes
    // you could also use the .textContent instead of .innerHTML when you are only dealing with text and not HTML code
    document.querySelector('[data-time="hours"]').innerHTML = new Date().getHours().toString().padStart(2, "0");
    document.querySelector('[data-time="minutes"]').innerHTML = new Date().getMinutes().toString().padStart(2, "0");
    document.querySelector('[data-time="seconds"]').innerHTML = new Date().getSeconds().toString().padStart(2, "0");
}, 1000)
