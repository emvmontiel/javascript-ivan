// An array of objects
const choirMembers = [
    {
        name: "Estelle",
        position: "Member",
        voice: "Soprano 1"
    },
    {
        name: "Ezra",
        position: "Vice-president",
        voice: "Tenor 1"
    },
    {
        name: "Yshee",
        position: "Secretary",
        voice: "Alto 1"
    }
]

// for (let a in choirMembers) {
//     console.log(a)
// }

// for (let a in choirMembers) {
//     console.log(choirMembers[a])
// }

// for (let a in choirMembers) {
//     console.log(choirMembers[a].name)
// }

let animal = {
	name: "dog",
	color: "white"
}

// for (let a in animal) {		
//     console.log(a);
// }

// for (let a in animal) {		
//     console.log(animal[a]);
// }

// const galleryImages = [{
//     src: "./assets/gallery/image1.jpg",
//     alt: "Thumbnail Image 1"
// },
// {
//     src: "./assets/gallery/image2.jpg",
//     alt: "Thumbnail Image 2"
// },
// {
//     src: "./assets/gallery/image3.jpg",
//     alt: "Thumbnail Image 3"
// }]

// Different loops for looping through an array of objects
// For each loop is the most efficient method

// Logs index; contains the same output for line 67
// for (let i in galleryImages) {
//     console.log(i)
// }
// 
// Logs object; contains the same output for line 71
// for (let i in galleryImages) {
//     console.log(galleryImages[i])
// }
// 
// galleryImages.forEach(function(image, index) {
//     console.log(index)
// })
// 
// galleryImages.forEach(function(image, index) {
//     console.log(image)
// })
                
const lessons = [
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

const otherArray = []
lessons.forEach(function(x) {
    otherArray.push(x.title)
})

// console.log(otherArray)

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

// accesses the first object (located in index 0) of the galleryImages array
mainImage.src = galleryImages[0].src 
mainImage.alt = galleryImages[0].alt

let thumbnails = document.querySelector("#gallery .thumbnails");

galleryImages.forEach(function(image, index) {
	let thumb = document.createElement("img");
	thumb.src = image.src;
	thumb.alt = image.alt;

    // the dataset property provides direct read and write access to all custom data attributes (data-*) defined on an HTML element
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