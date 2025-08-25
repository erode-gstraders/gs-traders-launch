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

// Dynamic fluid blobs
const blobs = document.querySelectorAll('.blob');

const blobData = Array.from(blobs).map(blob => ({
  el: blob,
  x: Math.random() * (window.innerWidth - blob.offsetWidth),
  y: Math.random() * (window.innerHeight - blob.offsetHeight),
  vx: (Math.random() - 0.5) * 1.5,
  vy: (Math.random() - 0.5) * 1.5,
  scale: 0.8 + Math.random() * 0.5
}));

function moveBlobs() {
  blobData.forEach(blob => {
    blob.x += blob.vx;
    blob.y += blob.vy;

    const maxX = window.innerWidth - blob.el.offsetWidth;
    const maxY = window.innerHeight - blob.el.offsetHeight;

    if(blob.x < 0 || blob.x > maxX) blob.vx *= -1;
    if(blob.y < 0 || blob.y > maxY) blob.vy *= -1;

    blob.el.style.transform = `translate(${blob.x}px, ${blob.y}px) scale(${blob.scale})`;
  });

  requestAnimationFrame(moveBlobs);
}

// Initialize
moveBlobs();


