"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { addEvents } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Add events from the events array to the page
	addEvents();
}
