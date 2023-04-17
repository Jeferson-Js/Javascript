const player = document.querySelector("#dragao");
const audio = document.querySelector("audio");
const fly = document.querySelector("audio");
const area = document.querySelector(".area");
let x = 0;
let y = 0;
window.addEventListener("keydown", (e) => {
  let tecla = e.keyCode;
  if (tecla === 39) {
    x += 15;
    player.style.left = x + "px";
  } else if (tecla === 37) {
    x -= 15;
    player.style.left = x + "px";
  } else if (tecla === 38) {
    y -= 15;
    player.style.top = y + "px";
  } else if (tecla === 40) {
    y += 15;
    player.style.top = y + "px";
  } else if (tecla === 13) {
    audio.play();
  }
});
