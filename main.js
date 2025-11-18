
document.addEventListener("DOMContentLoaded", () => {
  const ham = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeSidebar = document.getElementById("closeSidebar");

  ham.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
});

function sendMessage() {
  alert("Your message has been sent!");
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.pixel-bg');

  for (let i = 0; i < 40; i++) {
    let p = document.createElement('div');
    p.classList.add('pixel');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 4 + Math.random() * 6 + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(p);
  }
});
