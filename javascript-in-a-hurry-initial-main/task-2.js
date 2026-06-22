// Lingaw lingaw lang challenge

const now = new Date();
const hour = now.getHours();

if (hour >= 0 && hour < 12) {
    document.getElementById("greeting").innerText = "Ohayo!"
} else if (hour >= 12 && hour < 18) {
    document.getElementById("greeting").innerText = "Good Afternoon!"
} else {
    document.getElementById("greeting").innerText = "Good Evening!"
}

const placeholder = "<placeholder>";

document.getElementById("weather").innerText = `The weather is cloudy in London and it's ${placeholder} outside. `

// Jun 18 2025 10:13
// Create an img element for every item in the galleryImages array
// Add the necessary attributes of the img element as follows

// <img 
// src="./assets/gallery/image1.jpg" 
// alt="Thumbnail Image 1" 
// data-array-index="0" 
// data-selected="true">

const galleryImages = [{
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
}]

let mainImage = document.querySelector("#gallery > img")

mainImage.src = galleryImages[0].src
mainImage.alt = galleryImages[0].alt

let thumbnails = document.querySelector("#gallery .thumbnails")

galleryImages.forEach(function(image, index) {
    let thumb = document.createElement("img")
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = true;
    thumbnails.appendChild(thumb)
});