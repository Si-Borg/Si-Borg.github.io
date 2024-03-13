"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { showNewsletters } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Add newsletter when a year to view is selected
	showNewsletters();
}
