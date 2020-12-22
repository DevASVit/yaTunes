import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

// deactivation player block and button

const deactivationPlayer = () => {
  temp.style.display = "none";
  playerBtn.forEach((item) => item.classList.remove("active"));
  playerBlock.forEach((item) => item.classList.remove("active"));
};

// activation player block and button

playerBtn.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    deactivationPlayer();
    btn.classList.add("active");
    playerBlock[i].classList.add("active");
  })
);

// function call

videoPlayerInit();
musicPlayerInit();
radioPlayerInit();
