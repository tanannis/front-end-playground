const posts = [
	{ title: "Post One", body: "This is post one" },
	{ title: "Post Two", body: "This is post two" },
];

// mimic "POST" reqest
// make it asynchronous by using a Promise
function createPost(post) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			posts.push(post);

			const error = false;
			if (!error) {
				resolve();
			} else {
				reject("Error: Something went wrong");
			}
		}, 2000);
	});
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
createPost({ title: "Post Three", body: "This is post three" })
	.then(getPosts)
	.catch(function (error) {
		console.log(error);
	});
