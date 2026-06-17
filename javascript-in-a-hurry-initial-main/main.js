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

/* Consider the following array:

let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

Run a For Loop through the array and send to the console only the accounts with the "EX" prefix.

In the above example, these values must be sent to the console:

"EX_983746"
"EX_098777" */

let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

for (a in bankAccounts) {
    let sliced = bankAccounts[a].slice(0, 3);
    if (sliced == "EX_") {
        console.log(bankAccounts[a])
    }
}

/* Consider the following array:

Create a forEach loop that runs through the lessons array and populates another array, with the lesson names only.

In the above case, this should be the value of the other array:

["Variables", "Conditionals", "Functions"] */

lessons = [
    {
        id: "273",
        title: "Variables",
        length: 12
    },
    {
        id: "295",
        title: "Conditionals",
        length: 7
    },
    {
        id: "299",
        title: "Functions",
        length: 9
    }
]; 

let otherArray = []
lessons.forEach(function(lesson, index) {
    // console.log(lesson.title)
    otherArray.push(lesson.title)
    console.log(otherArray)
})

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
]

let mainImage = document.querySelector("#gallery > img");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;