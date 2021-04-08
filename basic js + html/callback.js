const sum = (a, b) => {
	var total = a + b; //sync
	return total;
};
const add = (a, b, cb) => {
	setTimeout(function () {
		var total = a + b; //async
		cb(total);
	}, 3000);
	skip;
	return 'going back';
};
var x = 10;
var y = 15;
console.log('start');
console.log(sum(x, y));
add(x, y, (total) => {
	console.log('Task finish', total);
});
console.log('continue');
console.log('end');
