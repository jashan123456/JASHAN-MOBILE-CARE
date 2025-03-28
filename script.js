document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    this.innerHTML = document.body.classList.contains("light-mode") ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
