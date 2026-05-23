// Personal Task for Fun
// Create something that allows the greeting to change every time the user reloads the page
// Format must be: "Hello, user<x092p3>!" where the characters enclosed with <> are dynamic
// Bonus round: add a greeting tailored to the current time (e.g. morning, noon, evening)

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA TIME CHECK 16:40

// document.getElementById("greeting").innerHTML = dynamicGreeting();

function timeGreeting() {
    const date = new Date();
    let hour = date.getHours();
    let greeting = '';
    switch (hour) {
        case 5 <= hour <= 11:
            greeting = 'Good Morning, ';
            break;
        case (12 <= hour <= 17):
            greeting = 'Good Afternoon, ';
            break;
        case (18 <= hour <= 23):
            greeting = 'Good Evening, ';
            break;
        default:
            greeting = 'Hi there, night owl, ';
            break;
    }
    console.log(greeting)
    console.log(hour)
    console.log(typeof(hour))

}

timeGreeting();