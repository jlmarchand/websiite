// script.js

function toggleCollapse(contentId) {
  var content = document.getElementById(contentId);
  var button = content.previousElementSibling;

  // Toggle l'état du bloc
  if (content.style.display === "none" || !content.classList.contains("open")) {
    content.style.display = "block";
    content.classList.add("open");
    button.innerHTML = "Masquer";
  } else {
    content.style.display = "none";
    content.classList.remove("open");
    button.innerHTML = "Afficher";
  }
}
