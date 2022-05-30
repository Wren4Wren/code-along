let users = ['Dave', 'Gary', 'Steve'];

const addUser = (username) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			users.push(username);
			const error = false;
			if (!error) {
				resolve();
			} else {
				reject('oops there has been an error');
			}
		}, 2000);
	});
};

const getUsers = () => {
	setTimeout(() => {
		console.log(users);
	}, 1000);
};

addUser('Charlie')
	.then(getUsers)
	.catch((err) => {
		console.log(err);
	});
