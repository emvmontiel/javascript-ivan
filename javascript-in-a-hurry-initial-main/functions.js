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

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
]

// Menu Section
function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    })

    document.querySelector("#close-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open")
    })
}

// Temperature Conversion
function celsiusToFahr(temperature) {
    let fahr = (temperature * 1.8) + 32
    return fahr
} 

// Greeting Section
function greetingHandler() {
    const now = new Date();
    const hour = now.getHours();
    const temperature = 22;
    
    if (hour >= 0 && hour < 12) {
        document.getElementById("greeting").innerText = "Ohayo!"
    } else if (hour >= 12 && hour < 18) {
        document.getElementById("greeting").innerText = "Good Afternoon!"
    } else {
        document.getElementById("greeting").innerText = "Good Evening!"
    }
    
    document.querySelector(".weather-group").addEventListener("click", function(e) {
        if(e.target.id == "fahr") {
            weatherText = `The weather is cloudy in London and it's ${celsiusToFahr(Math.floor(temperature))}°F outside.`
        } else {
            weatherText = `The weather is cloudy in London and it's ${Math.floor(temperature)}°C outside.`
        }
        document.getElementById("weather").innerText = weatherText;
    });
}

// Local Time Section
function clockHandler() {
    setInterval(function() {
        let localTime = new Date()
        document.querySelector('[data-time="hours"]').textContent = localTime.getHours().toString().padStart(2, "0")
        document.querySelector('[data-time="minutes"]').textContent = localTime.getMinutes().toString().padStart(2, "0")
        document.querySelector('[data-time="seconds"]').textContent = localTime.getSeconds().toString().padStart(2, "0")
    }, 1000)
}

// Gallery Section
function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img")

    mainImage.src = galleryImages[0].src
    mainImage.alt = galleryImages[0].alt

    let thumbnails = document.querySelector("#gallery .thumbnails")

    galleryImages.forEach(function(image, index) {
        let thumb = document.createElement("img")
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
        thumb.addEventListener("click", function(e) {
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;
            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = false;
            })
            e.target.dataset.selected = true;
        })
        
        thumbnails.appendChild(thumb)
    });
}

/*
<div class="product-item">
    <img src="./assets/products/img6.png" alt="AstroFiction">
    <div class="product-details">
        <h3 class="product-title">AstroFiction</h3>
        <p class="product-author">John Doe</p>
        <p class="price-title">Price</p>
        <p class="product-price">$ 49.90</p>
    </div>
</div> 
*/

// Products Section
function productHandler() {

    // Selects the HTML element hardcoded in the HTML file
    let productsSection = document.querySelector(".products-area")

    // Runs a loop for each item of the products array
    products.forEach(function(product, index) {

        // Creates the parent element of the product item
        let productElm = document.createElement("div")
        productElm.classList.add("product-item")

        // Creates an image HTML element
        let productImage = document.createElement("img");
        productImage.src = product.image
        productImage.alt = product.title

        // 
        let productDetails = document.createElement("div")
        productDetails.classList.add("product-details")
        
        // Add child HTML elements to the parent
        productElm.append(productImage)
        productElm.append(productDetails)
        
        // 
        let productTitle = document.createElement("h3")
        productTitle.classList.add("product-title")
        productTitle.textContent = product.title
        
        // 
        let productAuthor = document.createElement("p")
        productAuthor.classList.add("product-author")
        productAuthor.textContent = product.author
        
        productDetails.append(productTitle)
        productDetails.append(productAuthor)
        

        // Add parent HTML element along with its children or the product item to the products area
        productsSection.append(productElm)
        
        // 
        let priceTitle = document.createElement("p")
        priceTitle.classList.add("price-title")
        
        // 
        let productPrice = document.createElement("p")
        productPrice.classList.add("product-price")
    })
}

menuHandler()
clockHandler()
greetingHandler()
galleryHandler()
productHandler()