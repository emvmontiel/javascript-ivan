// How the For In loop works with objects and arrays
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

for (let a in choirMembers) {
    console.log(a)
}

for (let a in choirMembers) {
    console.log(choirMembers[a])
}

for (let a in choirMembers) {
    console.log(choirMembers[a].name)
}

// A single object
let animal = {
	name: "dog",
	color: "white"
}

for (let a in animal) {		
    console.log(a);
}

for (let a in animal) {		
    console.log(animal[a]);
}