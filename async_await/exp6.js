let users = ['Dave', 'Gary', 'Steve'];

const addUser = (username, callback) => {
	setTimeout(() => {
		users.push(username);
		callback();
	}, 2000);
};

const getUsers = () => {
	setTimeout(() => {
		console.log(users);
	}, 1000);
};

addUser('Charlie', getUsers);
