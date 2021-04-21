class Animal {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	get name() {
		return this.name;
	}

	// set name(newName) {
	// 	this.name = newName;
	// }
}
var dog = new Animal('dog', '123');
console.log(dog.name());

// function Animal(name) {
// 	this.name = name;
// }
// Animal.prototype.getName = function () {
// 	return this.name;
// };

// let dog = new Animal('dog');
// console.log(dog);
// console.log(dog.getName());
// Animal.prototype.changeName = function (name) {
// 	this.name = name;
// };
// dog.changeName('horse');
// console.log(dog.getName());
