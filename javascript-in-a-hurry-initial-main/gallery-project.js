// Jun 16 2026

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

// mainImage here was made a variable
// Essentially, mainImage pertains to the HTML element <img src="" alt="" /> of the section with the gallery id
let mainImage = document.querySelector("#gallery > img");

// Accesses the first object (located in index 0) of the galleryImages array
mainImage.src = galleryImages[0].src 
mainImage.alt = galleryImages[0].alt

let thumbnails = document.querySelector("#gallery .thumbnails");

galleryImages.forEach(function(image, index) {
	let thumb = document.createElement("img");
	thumb.src = image.src;
	thumb.alt = image.alt;

    // The dataset property provides direct read and write access to all custom data attributes (data-*) defined on an HTML element
	thumb.dataset.arrayIndex = index; // creates an HTML attribute called data-array-index
	thumb.dataset.selected = index === 0 ? true : false; // creates an HTML attribute called data-selected

    // Jun 17 2025 10:04

    thumb.addEventListener("click", function(e) {
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;
        thumbnails.querySelectorAll("img").forEach(function(img) {
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;
    })
    thumbnails.appendChild(thumb)
	});