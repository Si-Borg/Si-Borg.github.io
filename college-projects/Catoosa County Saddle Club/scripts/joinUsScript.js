"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { navInit } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Initialize the event listener for the mobile navigation menu
      navInit();
}