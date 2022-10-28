const navbar = document.querySelector("#navbar");
const actionImg = document.getElementById("action-img");
const audio = document.createElement("audio");
audio.setAttribute("src", "coc-vibe.m4a");
const playBtn = document.getElementById("playIcon");

playBtn.addEventListener("click", playAudio);

function playAudio() {
  if (audio.paused) {
    audio.volume = 0.1;
    audio.play();
    playBtn.src = "./images/pause.png";
  } else {
    audio.pause();
    playBtn.src = "./images/play.png";
  }
}

function removeClasses() {
  let navbarWidthPx = getComputedStyle(navbar).width;
  let width = Number(navbarWidthPx.slice(0, -2));
  if (width > 700) {
    navbar.classList.remove("hide");
    navbar.classList.add("show");
  }
}

removeClasses();

actionImg.addEventListener("click", toggleNavigationBar);

function toggleNavigationBar(e) {
  e.stopPropagation()
  console.log("being clicked")
  removeClasses();
  if (navbar.classList.contains("hide")) {
    navbar.classList.add("show");
    navbar.classList.remove("hide");
    actionImg.src = "./images/close.png";
    actionImg.style.transform = "rotate(360deg)";
  } else {
    navbar.classList.add("hide");
    navbar.classList.remove("show");
    actionImg.src = "./images/menu.png";
    actionImg.style.transform = "rotate(0)";
  }
}
