const myPosts = [
	{ title: 'Post One', body: 'This is post one body' },
	{ title: 'Post Two', body: 'This is post two body' },
];
function getPosts() {
	setTimeout(() => {
		myPosts.forEach((post) => {
			console.log(post.title);
		});
		console.log(myPosts);
	}, 1000);
}
function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			myPosts.push(post);
			const error = false;
			if (!error) {
				resolve();
			} else {
				reject('something went wrong');
			}
		}, 5000);
	});
}

async function init() {
	try {
		await createPost({ title: 'Post Three', body: 'This is post three body' });
		getPosts();
	} catch (error) {
		console.log(error);
	}
}
init();
