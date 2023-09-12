"use strict";

let toggleBtn = document.querySelector("#bars-btn");
let menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show-menu"));
