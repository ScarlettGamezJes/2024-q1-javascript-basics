//@ts-check
// this variable is a number
let intelligenceLevel  = 100

// first name is a string
let firstNAME = "Jesse";
let lastNAME = "Silva";

//I can reasign a variable's value
firstNAME = "John";


// these are constants and cannot be reasigned
const MIN_IQ = 50;
const MAX_IQ = 300;

console.log(firstNAME, lastNAME, "has IQ", intelligenceLevel);

let isWillTheCoolest = true;

// currently undefined
let dontKnow;


// null is a value that has no value
let intoTheVoid = null;


console.log(firstNAME, lastNAME, "has IQ", intelligenceLevel)


// this is an object definition
let myPet = {
    type: "Dog",
    name: "Louie",
    ageInHumanYears:9,
    color: "black",
    favoriteFoods: [
        "bacon",
        "steak",
        "pizza"
    // @ts-ignore
    ,"peanut butter",
    ],
owner: {
    firstNAME: "Robert",
    lastNAME: "Hardy",
}
};

myPet.color = "brown";
myPet.Color = "black";
console.log("mypet looks like this", myPet);

//arrays are fun
let favCandies = [
    "War Heads",
    "Black Licorice",
    "Skittles JUST Skittles",
    "Snickers",
    true,
    90000000,
    myPet
];
console.log("my fav candies are:", favCandies);
// arrays start counting from zero 
console.log("my fav candies at index 2 is:", favCandies[2]);

favCandies.length;