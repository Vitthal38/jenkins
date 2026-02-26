function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

function showMessage() {
    alert("You clicked the button!");
}

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
