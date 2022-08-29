const posts = [
	{ title: "Post One", body: "This is post one" },
	{ title: "Post Two", body: "This is post two" },
];

// mimic "POST" reqest
// make it asynchronous by using a callback function
function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

// mimic "GET" request
function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post) => {
			output += `<li>${post.title}</li>`;
		});
		// post to body
		document.body.innerHTML = output;
	}, 1000);
}

// getPosts is the callback function here
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
