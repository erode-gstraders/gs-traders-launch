// Countdown logic
const launchDate = new Date("2025-09-01T00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2,'0');
    document.getElementById("hours").textContent = hours.toString().padStart(2,'0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2,'0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2,'0');

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "We Are Live!";
    }
}, 1000);

// Blob movement logic
const blob = document.querySelector('.blob');

let posX = window.innerWidth / 2 - blob.offsetWidth / 2;
let posY = window.innerHeight / 2 - blob.offsetHeight / 2;

// Random initial velocity
let velX = (Math.random() - 0.5) * 0.2; // slower for smooth effect
let velY = (Math.random() - 0.5) * 0.2;

function floatBlob() {
    posX += velX;
    posY += velY;

    // Restrict movement near center (not edges)
    const centerX = window.innerWidth / 2 - blob.offsetWidth / 2;
    const centerY = window.innerHeight / 2 - blob.offsetHeight / 2;
    const maxOffsetX = 100; // horizontal movement limit
    const maxOffsetY = 80;  // vertical movement limit

    if (posX < centerX - maxOffsetX || posX > centerX + maxOffsetX) velX *= -1;
    if (posY < centerY - maxOffsetY || posY > centerY + maxOffsetY) velY *= -1;

    blob.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(floatBlob);
}

floatBlob();

