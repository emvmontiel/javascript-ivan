document.getElementById("greeting").innerHTML = ("Hello, World!");

document.querySelector("#open-nav-menu").addEventListener("click", function(){ 
    document.querySelector("header nav .wrapper").classList.add("nav-open");  
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){ 
    document.querySelector("header nav .wrapper").classList.remove("nav-open");  
});

function celsiusToFahr(temperature) {
    console.log(temperature)
}

// document.querySelector(".weather-group").addEventListener("click", function(e){ 
//     if(e.target.id == "celsius")    {
//         console.log("clicked the celsius");
//     } else if ({

//     }
// }); 

console.log("My age is " + 24);
console.log("My age is ", 24);
const age = 24;
// console.log("My age is " + age);
// console.log("My age is ", age);