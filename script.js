/* TYPEWRITER */
const msg = `
Sadia…
Tum meri zindagi ki sabse khoobsurat kahani ho 😔❤️

Har tasveer me tumhari muskurahat,
aur har saans me tumhara naam hai.

Main tumhara hoon,
aur hamesha rahunga.
`;

let i = 0;
function type() {
  if (i < msg.length) {
    document.getElementById("type").innerHTML += msg.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}
type();

/* SLIDESHOW + EFFECT */
const pics = ["photo1.jpg", "photo2.jpg"];
let idx = 0;
setInterval(() => {
  const img = document.getElementById("slide");
  img.style.transform = "scale(1.25) rotate(3deg)";
  setTimeout(() => {
    idx = (idx + 1) % pics.length;
    img.src = pics[idx];
    img.style.transform = "scale(1) rotate(0deg)";
  }, 600);
}, 3500);

/* MUSIC */
function playAll() {
  document.getElementById("bgm").play();
  burstHearts();
}

/* HEART RAIN */
const box = document.querySelector(".hearts");
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 18 + Math.random() * 20 + "px";
  h.style.animationDuration = 3 + Math.random() * 4 + "s";
  box.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}, 150);

/* HEART BURST */
function burstHearts() {
  for (let i = 0; i < 25; i++) {
    const b = document.createElement("span");
    b.innerHTML = "💗";
    b.style.left = 50 + Math.random() * 20 - 10 + "vw";
    b.style.top = "60vh";
    b.style.position = "absolute";
    b.style.animation = "fall 2s linear";
    box.appendChild(b);
    setTimeout(() => b.remove(), 2000);
  }
}

