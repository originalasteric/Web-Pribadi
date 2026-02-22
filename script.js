/* PAGE */
function goNext() {
  document.getElementById("page1").classList.remove("page-active");
  document.getElementById("page2").classList.add("page-active");
  startTyping();
}

/* TYPEWRITER */
const message =
  "Gw mau Adek belajar mencintai Diri Sendiri.\n" +
  "Mau dunia gasuka sama Lu,\n" +
  "Tenang,\n"+ 
  "Ada Gw di sini ada buat bantu Lu.";

function startTyping() {
  const el = document.getElementById("text");
  el.innerHTML = "";
  let i = 0;

  function type() {
    if (i < message.length) {
      el.innerHTML += message[i] === "\n" ? "<br>" : message[i];
      el.style.opacity = 0.9 + Math.sin(i * 0.12) * 0.05;
      i++;
      setTimeout(type, 45);
    }
  }
  type();
}

/* BACKGROUND LOVE RAIN */
const bg = document.getElementById("bg");
const bctx = bg.getContext("2d");

function resizeBG() {
  bg.width = innerWidth;
  bg.height = innerHeight;
}
resizeBG();
addEventListener("resize", resizeBG);

const rain = [];
setInterval(() => {
  rain.push({
    x: Math.random() * bg.width,
    y: -30,
    speed: Math.random() * 1.8 + 0.8,
    size: Math.random() * 14 + 6,
    hue: 330 + Math.random() * 20,
    alpha: Math.random() * 0.4 + 0.3
  });
}, 22);

function animateBG() {
  bctx.fillStyle = "rgba(0,0,0,0.25)";
  bctx.fillRect(0, 0, bg.width, bg.height);

  rain.forEach((p, i) => {
    p.y += p.speed;
    bctx.font = `${p.size}px serif`;
    bctx.fillStyle = `hsla(${p.hue},70%,75%,${p.alpha})`;
    bctx.fillText("♥", p.x, p.y);
    if (p.y > bg.height) rain.splice(i, 1);
  });

  requestAnimationFrame(animateBG);
}
animateBG();

/* LOVE ARLETTA */
const love = document.getElementById("love");
const lctx = love.getContext("2d");

function resizeLove() {
  love.width = innerWidth;
  love.height = innerHeight;
}
resizeLove();
addEventListener("resize", resizeLove);

const name = "ARLETTA";
let t = 0;

function heart(a) {
  return {
    x: 16 * Math.sin(a) ** 3,
    y:
      13 * Math.cos(a) -
      5 * Math.cos(2 * a) -
      2 * Math.cos(3 * a) -
      Math.cos(4 * a)
  };
}

function animateLove() {
  lctx.clearRect(0, 0, love.width, love.height);

  const cx = love.width / 2;
  const cy = love.height / 2 + 30;
  const s = Math.min(cx, cy) / 13;

  lctx.font = "20px Georgia";
  lctx.textAlign = "center";
  lctx.fillStyle = "rgba(255,190,205,0.85)";

  for (let a = 0; a < Math.PI * 2; a += 0.055) {
    const p = heart(a + t);
    lctx.fillText(name, cx + p.x * s, cy - p.y * s);
  }

  t += 0.004;
  requestAnimationFrame(animateLove);
}
animateLove();