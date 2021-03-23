var suggestion_tag = document.querySelector('#autoSuggest');
var div_tag = document.querySelector('#ab');
var data = [
	'chinese',
	'thai',
	'chai',
	'continental',
	'indian',
	'indi',
	'chi',
	'south indian',
];
suggestion_tag.addEventListener('keyup', (e) => {
	var keyWord = e.target.value;
	div_tag.innerHTML = '';
	if (keyWord) {
		for (i = 0; i < data.length; i++) {
			if (data[i].includes(keyWord)) {
				var p_ele = document.createElement('p');
				p_ele.innerText = data[i];
				p_ele.style.color = 'orange';
				p_ele.id = i;
				div_tag.appendChild(p_ele);
			}
		}
	} else {
		div_tag.innerHTML = '';
	}
});
