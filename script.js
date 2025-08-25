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
let posX = Math.random() * (window.innerWidth - blob.offsetWidth);
let posY = Math.random() * (window.innerHeight - blob.offsetHeight);
let velX = (Math.random() - 0.5) * 0.3; // slow movement
let velY = (Math.random() - 0.5) * 0.3;
const scale = 1;

function moveBlob() {
    posX += velX;
    posY += velY;

    // Keep blob within screen
    const maxX = window.innerWidth - blob.offsetWidth;
    const maxY = window.innerHeight - blob.offsetHeight;

    if(posX < 0 || posX > maxX) velX *= -1;
    if(posY < 0 || posY > maxY) velY *= -1;

    blob.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;

    requestAnimationFrame(moveBlob);
}

moveBlob();
