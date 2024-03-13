"use strict";

import { wobbleEffect, mobileWobbleEffect, onViewEffect, profileTimeOut } from "./scripts.js";

window.addEventListener("load", init);

function init() {
      // Get and add event listener for wobble effect to the profile picture element
      let profileImg = document.getElementById("profile");
      profileImg.addEventListener("mousemove", wobbleEffect);
      profileImg.addEventListener("touchmove", mobileWobbleEffect);
      // Timeout function for profile image
      profileTimeOut(profileImg);

      // Add fade in effect to section elements
      let sections = document.querySelectorAll('main section');
      onViewEffect(sections, "fade-in-glow");
}