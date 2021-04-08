var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var option1Label = document.getElementById('option1Label');
var option2Label = document.getElementById('option2Label');
var option3Label = document.getElementById('option3Label');
var option4Label = document.getElementById('option4Label');
var questionText = document.getElementById('questionText');
var questionNumber = document.getElementById('questionNumber');
var buttons = document.getElementById('buttons');
var options = document.getElementById('options');

var allQuestions = {};
var currIndex = 0;

const getData = () => {
	fetch(
		'https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple',
	)
		.then((res) => res.json())
		.then((res) => {
			allQuestions = res.results;
			displayQuestion();
		});
};

document.getElementById('start').addEventListener('click', getData);

buttons.addEventListener('click', function (e) {
	let buttonType = e.target.id;
	if (buttonType === 'next') {
		currIndex += 1;
	} else {
		currIndex -= 1;
	}
	displayQuestion();
});

options.addEventListener('click', function (e) {
	console.log(e.target.value);
});

const displayQuestion = () => {
	let data = allQuestions[currIndex];
	buttons.innerHTML = '';
	questionNumber.innerText = currIndex + 1 + '.';
	questionText.innerText = data.question;
	option1.value = data.correct_answer;
	option1Label.innerText = data.correct_answer;
	option2.value = data.incorrect_answers[0];
	option2Label.innerText = data.incorrect_answers[0];
	option3.value = data.incorrect_answers[1];
	option3Label.innerText = data.incorrect_answers[1];
	option4.value = data.incorrect_answers[2];
	option4Label.innerText = data.incorrect_answers[2];
	if (currIndex !== 0) {
		var prevButton = document.createElement('button');
		prevButton.id = 'previous';
		prevButton.innerText = 'Previous';
		buttons.appendChild(prevButton);
	}
	if (currIndex !== 19) {
		var nextButton = document.createElement('button');
		nextButton.id = 'next';
		nextButton.innerText = 'Next';
		buttons.appendChild(nextButton);
	}
};
