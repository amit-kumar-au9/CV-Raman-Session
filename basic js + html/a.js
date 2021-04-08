// // // // // // // // // var myObject = {
// // // // // // // // // 	code: 123,
// // // // // // // // // 	get_code: function () {
// // // // // // // // // 		return this.code;
// // // // // // // // // 	},
// // // // // // // // // };
// // // // // // // // // var customObject = Object.create(myObject);
// // // // // // // // // customObject.code = 456;

// // // // // // // // // delete customObject.code;
// // // // // // // // // console.log(customObject.get_code());
// // // // // // // // let arr = [1, 2, 5];

// // // // // // // // arr.splice(-1, 0, 3, 4);

// // // // // // // // console.log(arr);
// // // // // // // let value = 'sigma';

// // // // // // // if (true) {
// // // // // // // 	var valueNumber2 = 'Beta';
// // // // // // // 	value = 'Gamma';
// // // // // // // 	console.log(value);
// // // // // // // 	console.log(valueNumber2);
// // // // // // // }

// // // // // // // console.log(valueNumber2);
// // // // // // // console.log(value);
// // // // // // var foo = { a: 'a' };
// // // // // // var boo = Object.assign(foo);
// // // // // // foo.a = 'b';

// // // // // // console.log(boo.a);
// // // // // let Info = {
// // // // // 	name: 'Niki',
// // // // // 	Roll: '17BTCSE22',
// // // // // 	Section: 'A',

// // // // // 	dispInfo: function () {
// // // // // 		console.log(this);
// // // // // 	},
// // // // // };

// // // // // let Info2 = {
// // // // // 	name: 'Niki',
// // // // // 	Roll: '17BTCSE22',
// // // // // 	Section: 'A',

// // // // // 	dispInfo: function () {
// // // // // 		console.log(this);
// // // // // 	},
// // // // // };

// // // // // Info.dispInfo();
// // // // // Info2.dispInfo();

// // // // function nextLine(arr, x) {
// // // // 	test.push(x);
// // // // 	test.shift(arr[0]);
// // // // 	return arr[0] || x;
// // // // 	return x;
// // // // }

// // // // var test = [1, 2, 3, 4, 5];

// // // // console.log('Before: ' + JSON.stringify(test));
// // // // console.log(nextLine(test, 6));
// // // // console.log('After: ' + JSON.stringify(test));
// // // let items = new Map([
// // // 	['Dish washer', 500],
// // // 	['tomatoes', 350],
// // // 	['Lemons', 50],
// // // ]);

// // // for (let item of items.keys()) {
// // // 	console.log(item);
// // // }

// // // for (let price of items.values()) {
// // // 	console.log(price);
// // // }

// // // for (let entry of items) {
// // // 	console.log(entry);
// // // }
// // function getAge(...args) {
// // 	console.log(typeof args);
// // }

// // getAge(21);

// class Counter {
// 	constructor() {
// 		this.count = 0;
// 	}

// 	increment() {
// 		this.count++;
// 	}
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);
