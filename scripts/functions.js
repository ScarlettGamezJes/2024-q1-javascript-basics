//@ts-check

// let firstNAME = "John";

let sayHi = function(firstNAME, age) {
    let greeting = `Hello! My name is ${firstNAME} and I am ${age} years old.`;
    // "Hello! My name is " + firstNAME " and I am " + age + " years old.";
    console.log(greeting);
    };

sayHi("Robert", 53);
sayHi(firstNAME, 19)

// console.log(firstNAME);


function add(a, b) {
let answer = a + b;
 return answer;

    let
    answer
    = a + b;
    return answer;
};
let additionAnswer = add(100, 5000);
add(5000, 9873498739873);

console.log(additionAnswer, add(5000, 9873498739873));
let runMystuff = (x, y, f) => {
    let answer = f(x, y);
    return answer;
};

runMystuff("WillLuke", 28, sayHi)

let person = {
    isWearingBarneyShirt: false,
    isTotallyAwesome: false
};

function wearBarneyShirt(person) {
    person.isTotallyAwesome = true;
}