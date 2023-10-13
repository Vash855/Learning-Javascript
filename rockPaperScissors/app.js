let aiMove = Math.random()

if (aiMove >= 0 && aiMove < 1/3) {
	aiMove = 'Rock';
} else if (aiMove >= 1/3 && aiMove < 2/3) {
	aiMove = 'Paper';
} else if (aiMove >= 2/3 && aiMove <= 1) {
	aiMove = 'Scissors';
}

console.log(aiMove);

let result = ''

if (aiMove === 'Rock') {
	result = 'Tie';
} else if (aiMove === 'Paper') {
	result ='You Lose!';
} else if (aiMove ==='Scissors') {
	result = 'You Win!';
}
console.log(result);