// Personal Task for Fun
// Create something that allows the greeting to change every time the user reloads the page
// Format must be: "Hello, user<x092p3>!" where the characters enclosed with <> are dynamic
// Bonus round: add a greeting tailored to the current time (e.g. morning, noon, evening)

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA TIME CHECK 16:40

document.getElementById("greeting").innerHTML = dynamicGreeting();

function timeGreeting() {
    const date = new Date();
    const hour = date.getHours();
    let goodDay = '';
    if (5 <= hour && hour <= 11) {
        goodDay = 'Good Morning, ';
    } else if (12 <= hour && hour <= 17) {
        goodDay = 'Good Afternoon, ';
    } else if (18 <= hour && hour <= 23) {
        goodDay = 'Good Evening, ';
    }
    return goodDay;
}

function userGenerator(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function dynamicGreeting() {
    const greeting = timeGreeting() + 'userX' + userGenerator() + '!';
    return greeting;
}