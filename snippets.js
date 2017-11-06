//=============================================================
//			let and const
//=============================================================
const CARS = ["bmw", "city"];
// values inside a const array or object CAN be changed. Values for single var can NOT be changed

let score = 100;
if (true) {
	let score = 780;
}

console.log(score) // 100

CARS.push("nano"); //legal

const score = 500; // should not be touched again

//=============================================================
//			arrow functions
//=============================================================
function printMe() {
	console.log("I am a printMe");
}
printMe();

// var funMe (= is) a function (=> and the contents of the function)
var funMe = () => {
	console.log("I am a funMe");
}
funMe();

var addMe = (score, addup) => {
	return score + addup;
}
console.log(addMe(300, 10));

// very rare to have one liner functions
var addMe2 = (score, addup) => score + addup;
console.log(addMe2(300, 10));

//=============================================================
//			'this' keyword
//=============================================================
function crazy() {
	console.log(this);
}
crazy();
// Returns [object Window] if called from scripts, returns button if called from button click
// Sets context to whatever element it gets called from

var same = () => {
	console.log(this);
}
// Returns [object Window] regardless where its called from
// context of 'this' always remains the same

//=============================================================
//			defailt parameters
//=============================================================
// Set default values for parameters
var getData = (temperature, cold = 10) => {
	if (temperature < cold) {
		return "this is cold here";
	} else {
		return "this is hot here";
	}
}
console.log(getData(6)); // cold
console.log(getData(15)); // hot
console.log(getData(15, 20)); // cold

//=============================================================
//			dynamic object creation
//=============================================================
let wrath = "angry";

let myObject = {
	user: 'Jack',
	score: 2000,
	angry: 99,
	highScore() {
		console.log("score is " + this.score);
	}
};

console.log(myObject);
console.log(myObject.score);
myObject.highScore();
console.log(myObject[wrath]); // 99

//=============================================================
//			for of loop
//=============================================================
let cars = ['BMW', 'City', 'Nano', 'Audi'];
for(let car of cars) {
	console.log(car);
}

let sentence = "Helllo Tiger";
for(let c of sentence) {
	console.log(c);
}

//=============================================================
//			super dots
//=============================================================
function deposit(...money) {
	let balance = 0;
	for(let i = 0; i < money.length; i++) {
		balance += money[i];
	}
	return balance;
}

// pass in normal array
console.log(deposit([100, 50, 7])); // without dots
// pass in dots
console.log(deposit(100, 50, 7));

let addMoney = [34, 77, 99, 24, 62];
console.log(Math.max(...addMoney)); // 99