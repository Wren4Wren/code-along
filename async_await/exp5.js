let users = ['Dave', 'Gary', 'Steve'];

const addUser = (username) => {
	setTimeout(() => {
		users.push(username);
	}, 2000);
};

const getUsers = () => {
	setTimeout(() => {
		console.log(users);
	}, 1000);
};

addUser('Charlie');
getUsers();
