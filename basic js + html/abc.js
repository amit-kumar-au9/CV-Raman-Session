var a = 5;
for (var i = 0; i <= 10; i++) {
	console.log(a * i);
}

// html;
// css;
// bootstrap;

// js, jquery;
// es5, es6;

const ab = [
	{
		name: 'amit',
		age: 23,
		gender: 'Male',
	},
	{
		name: 'raj',
		age: 20,
		gender: 'Male',
	},
];

for (i in ab) {
	console.log(ab[i].name);
}

const ab = () => {
	console.log(this);
};
