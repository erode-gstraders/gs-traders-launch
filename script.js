// Countdown logic
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = window.launchDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2,'0');
    document.getElementById("hours").textContent = hours.toString().padStart(2,'0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2,'0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2,'0');

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "We Are Live!";
    }
}, 1000);

// Single slow-moving blob
const blob = document.querySelector('.blob');
let x = 50;
let y = 50;
let vx = 0.2; // very slow horizontal speed
let vy = 0.15; // very slow vertical speed

function moveBlob() {
    x += vx;
    y += vy;

    // Bounce inside screen
    const maxX = window.innerWidth - blob.offsetWidth;
    const maxY = window.innerHeight - blob.offsetHeight;

    if(x < 0 || x > maxX) vx *= -1;
    if(y < 0 || y > maxY) vy *= -1;

    blob.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveBlob);
}

moveBlob();
