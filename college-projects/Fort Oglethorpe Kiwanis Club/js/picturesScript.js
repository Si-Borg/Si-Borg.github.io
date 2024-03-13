"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { addSetOptions, addPictures } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Add picture set names to the options box
	addSetOptions();

	// Get and add an event listener to the pictures "View" button
	let pictureSetsButton = document.getElementById("show-pictures");
	pictureSetsButton.addEventListener("click", addPictures);
}
