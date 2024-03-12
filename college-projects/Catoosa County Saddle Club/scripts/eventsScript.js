"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { navInit, addEvents } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Initialize the event listener for the mobile navigation menu
	navInit();

	// Add events from the events array to the page
	addEvents();
}
