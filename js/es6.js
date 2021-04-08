// const abc = () => {
// 	if (age > 25) {
// 		let ab = (age * 25) / 2;
// 		console.log(ab);
// 	}
// };
// abc();

// const abc = {
// 	name: 'amit',
// 	age: 23,
// 	email: 'amit@gmail.com',
// };
// const { name } = abc;

// console.log(name);
// console.log(abc.name);

// const props = {
// 	match: true,
// 	ArtistDetail: '',
// 	followingDetail: '',
// 	isLoadingArtistDetail: '',
// 	fetchArtist: '',
// 	followerDetail: '',
// };

// const new_props = {
// 	...props,
// 	match: false,
// 	age: 15,
// 	name: 'amit',
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.length = 5;
// console.log(arr);
// // Math.pow(2,3)
// console.log(2 ** 3);

// const new_arr = [...arr, 6, 7, 8];
// console.log(new_arr);
// // console.log(new_props);

const old_marks = [1, 2, 3, 4, 5];
// console.log(abc);
// // abc.forEach((element) => {
// // 	console.log(element);
// // });
// console.log(...abc);
const updated_marks = [6, 7, 8, ...old_marks];
old_marks.forEach((data) => {
	updated_marks.push(data);
});
console.log(updated_marks);
console.log('9' + 9 * '2');
console.log('9' - '5');
