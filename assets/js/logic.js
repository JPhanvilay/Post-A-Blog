// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle?.addEventListener("click", function () {
 document.body.classList.toggle("dark-mode");
 localStorage.setItem(
  "dark-mode",
  document.body.classList.contains("dark-mode")
 );
});

// Apply dark mode on page load based on user
window.addEventListener("DOMContentLoaded", (event) => {
 if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
 }
});

function goBack() {
 window.history.back();
}
