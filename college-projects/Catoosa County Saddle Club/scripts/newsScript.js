"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { NEWS_ARRAY } from "./storage-arrays/newsArray.js";
import { navInit, addNews } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Initialize the event listener for the mobile navigation menu
	navInit();

	// Function that adds content when the news page is loaded
	let main = document.getElementsByTagName("main")[0];

	// Check if NEWS_ARRAY is empty
	if (NEWS_ARRAY.length != 0) {
		// Add every news item in the NEWS_ARRAY to the page
		for (let i = 0; i < NEWS_ARRAY.length; i++) {
			addNews(i, main);
		}
	} else {
		// Add default text if NEWS_ARRAY is empty
		addNews(0, main);
	}
}
