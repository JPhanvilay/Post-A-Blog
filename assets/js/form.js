document
 .getElementById("blogForm")
 ?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  let username = document.getElementById("username").value.trim();
  let title = document.getElementById("title").value.trim();
  let content = document.getElementById("content").value.trim();

  // Clear previous error message
  let errorMessage = document.getElementById("errorMessage");
  if (errorMessage) {
   errorMessage.remove();
  }

  // Validate form fields
  if (!username || !title || !content) {
   // Display error message
   let form = document.getElementById("blogForm");
   let message = document.createElement("div");
   message.id = "errorMessage";
   message.style.color = "red";
   message.style.marginTop = "10px";
   message.innerText = "All fields are required. Please complete the form.";
   form.appendChild(message);
   return;
  }

  let post = {
   username: username,
   title: title,
   content: content,
   date: new Date().toLocaleString(),
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));

  // Redirect to posts.html after saving the post
  window.location.href = "blog.html";
 });
