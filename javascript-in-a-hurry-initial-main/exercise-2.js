/* Consider the following array:

Create a forEach loop that runs through the lessons array and populates another array, with the lesson names only.

In the above case, this should be the value of the other array:

["Variables", "Conditionals", "Functions"] */

// Retrieve only the titles of each object in the lessons array
// Output must be formatted inside of an array as well
// otherArray = ['Variables', 'Conditionals', 'Functions']

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

console.log(otherArray)