// An array of objects
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

// Looping through an array of objects using the For each loop
// Logs index; contains the same output for line 27
for (let i in galleryImages) {
    console.log(i)
}

// Logs object; contains the same output for line 31
for (let i in galleryImages) {
    console.log(galleryImages[i])
}

galleryImages.forEach(function(image, index) {
    console.log(index)
})

galleryImages.forEach(function(image, index) {
    console.log(image)
})