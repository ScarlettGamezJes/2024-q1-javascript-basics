//@ts-check

add(1, 2);

let firstNAME = "John";

// add default parameter view
// @ts-ignore
let sayHi = function (firstNAME = "Captin No Name", age = 100000) {
	let greeting = `Hello! My name is ${firstNAME} and I am ${age} years old.`;
	// "Hello! My name is " + firstNAME " and I am " + age + " years old.";
	console.log(greeting);
};
//call with default params
sayHi();
sayHi("Jake");
//call with default age
sayHi("Robert", 53);
sayHi(firstNAME, 19);

// console.log(firstNAME);

// this function is hoisted to the global scope
// to the global scope
function add(a, b) {
	let answer = a + b;
	return answer;
}
let additionAnswer = add(100, 5000);
add(5000, 9873498739873);

console.log(additionAnswer, add(5000, 9873498739873));
let runMystuff = (x, y, f) => {
	let answer = f(x, y);
	return answer;
};

runMystuff("WillLuke", 28, sayHi);

let person = {
	isWearingBarneyShirt: false,
	isTotallyAwesome: false,
};

function wearBarneyShirt(person) {
	person.isWearingBarneyShirt = true;
	person.isTotallyAwesome;
}

console.log(person);
wearBarneyShirt(person);
console.log(person);
