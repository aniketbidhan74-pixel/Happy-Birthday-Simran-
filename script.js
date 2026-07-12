// Change this to any password you want
const correctPassword = "Forever31";

function checkPassword() {
    const entered = document.getElementById("password").value;

    if (entered === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("website").style.display = "block";

        startHearts();

        alert("❤️ Happy Birthday Simran ❤️");
    } else {
        alert("Wrong Password ❤️");
    }
}

// Floating hearts animation
function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 6s linear, opacity 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(" + (window.innerHeight + 100) + "px)";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);

}
