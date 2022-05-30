const myAsyncFunction = () => {
	return new Promise((resolve, reject) => {
		let a = 1 + 1;
		if (a == 2) {
			resolve('My promise has been resolved');
		} else {
			reject('My promise has been rejected');
		}
	});
};

function init() {
	let response = myAsyncFunction();
	console.log(response);
}

init();
