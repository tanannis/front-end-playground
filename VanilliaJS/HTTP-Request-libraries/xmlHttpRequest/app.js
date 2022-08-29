// Call and test your http request library here

const http = new EasyHTTP();

// Get all posts:
http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});

// Get single post:
http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

// Create a post:
const data = {
	title: "Custom Post",
	body: "This is a custom post",
};
http.post(
	"https://jsonplaceholder.typicode.com/posts",
	data,
	function (err, post) {
		if (err) {
			console.log(err);
		} else {
			console.log(post);
		}
	}
);

// Update post
http.put(
	"https://jsonplaceholder.typicode.com/posts/5",
	data,
	function (err, post) {
		if (err) {
			console.log(err);
		} else {
			console.log(post);
		}
	}
);

// Delete a post:
http.delete(
	"https://jsonplaceholder.typicode.com/posts/1",
	function (err, response) {
		if (err) {
			console.log(err);
		} else {
			console.log(response);
		}
	}
);
