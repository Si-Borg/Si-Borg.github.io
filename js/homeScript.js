"use strict";

import { wobbleEffect, mobileWobbleEffect } from "./scripts.js";

window.addEventListener("load", init);

function init() {
      // Get and add event listener for wobble effect to the profile picture element
      let profileImg = document.getElementById("profile");
      profileImg.addEventListener("mousemove", wobbleEffect);
      profileImg.addEventListener("touchmove", mobileWobbleEffect);
}