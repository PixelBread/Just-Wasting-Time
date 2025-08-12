const messages = [
	'loeading...',
	'packages is reading..',
	'modules is readying.',
	'all done!'
];

let timer = 0;

function showNext() {
	if (timer < messages.length) {
		console.log(messages[timer]);
		timer++;
		setTimeout(showNext,1500);
	}
	
}

showNext();
