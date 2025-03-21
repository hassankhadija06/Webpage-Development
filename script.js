// Change background color on button click
function changeBackgroundColor() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill out all fields!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

// Display welcome message on page load
window.onload = function() {
    alert("Welcome to my portfolio!");
};
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    loading.style.display = "none";
});