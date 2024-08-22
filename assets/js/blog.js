function displayPosts() {
 let posts = JSON.parse(localStorage.getItem("posts")) || [];
 let postsDiv = document.getElementById("posts");
 postsDiv.innerHTML = "";

 posts.forEach(function (post) {
  let postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Posted by ${post.username} on ${post.date}</small>
        `;

  postsDiv.appendChild(postDiv);
 });
}

// Display posts on posts.html
if (document.getElementById("posts")) {
 displayPosts();
}
