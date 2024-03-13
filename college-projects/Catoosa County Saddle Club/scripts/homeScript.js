"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { EVENTS_ARRAY } from "./storage-arrays/eventsArray.js";
import { navInit, addNews, createEventElement, sortEvents } from "./scripts.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Initialize the event listener for the mobile navigation menu
	navInit();

	// Add dynamic content to the home page
	addHomeContent();
}

// Function that adds content when the home page is loaded
function addHomeContent() {
	let recentNews = document.getElementById("recent-news");
	let upcomingEvent = document.getElementById("next-event");

	addNews(0, recentNews);
	upcomingEvent.append(addUpcomingEvent());
}

function addUpcomingEvent() {
	// Sort events array so the first
	let events = sortEvents(EVENTS_ARRAY);

	// Get the current date
	let currentDate = new Date();

	for (let i = 0; i < events.length; i++) {
		// Get the dates of the events from the sorted array
		// and add the first event that happens after the
		// current date to the page
		let eventDate = new Date(events[i][0]);

		if (eventDate > currentDate) {
			// Create next event to return
			let nextEvent = createEventElement(eventDate, events, i);
			return nextEvent;
		}
	}

	// Create default text if there are no upcoming events
	let noEvents = document.createElement("h3");
	noEvents.textContent = "No upcoming events, check back later.";

	// Return default text if there is no upcoming event
	return noEvents;
}
