let myPosts = ['post1', 'post2', 'post3'];

const allPosts = () => {
	setTimeout(() => {
		myPosts.map((post) => console.log(post));
	}, 1000);
};

const createPost = (post) => {
	setTimeout(() => {
		myPosts.push(`${post}`);
	}, 2000);
};

createPost('post4');
allPosts();
