function startTimer() {
    const startDate = new Date("2025-05-13"); // Set permanen
    const now = new Date();
    const timeDiff = Math.abs(now - startDate);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerText = `${days} hari bersama!`;
}

// Jalankan saat halaman dimuat
window.addEventListener('DOMContentLoaded', startTimer);

document.getElementById('giftBox').onclick = function () {
    this.style.pointerEvents = 'none';
    this.querySelector('.box-lid').style.transform = 'translateY(-100%)';

    setTimeout(() => {
        this.style.display = 'none'; // Hilangkan gift box setelah animasi
        document.getElementById('giftMessage').style.display = 'block';
        startConfetti();
    }, 100); // tunggu 1 detik agar animasi tutup selesai
};


function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            // Wrap hsl() di dalam backticks juga
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 3 + 1,
            direction: Math.random() * 2 * Math.PI
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += Math.cos(p.direction) * p.speed;
            p.y += Math.sin(p.direction) * p.speed;
            if (p.x > canvas.width || p.x < 0 || p.y > canvas.height || p.y < 0) {
                p.x = Math.random() * canvas.width;
                p.y = Math.random() * canvas.height;
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

let index = 0;
const text = "Cintaku, kamu adalah segalanya bagiku, Aku mencintaimu lebih dari kata-kata bisa ungkapkan.";
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
