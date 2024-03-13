"use strict";
// Script written by Silas Callahan

import { NEWS_ARRAY } from "./storage-arrays/newsArray.js";
import { EVENTS_ARRAY } from "./storage-arrays/eventsArray.js";
import { PICTURE_SETS_ARRAY } from "./storage-arrays/pictureSetsArray.js";

export function navInit() {
	let navButton = document.getElementById("small-nav-button");
	navButton.addEventListener("click", smallNav);

	let navLinks = document.querySelectorAll("#large-nav ul li a");

	// Loop that adds an animation utility class to the nav links
	// so the animation does not play on page load, but instead
	// on first mouseover event
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("mouseover", () => {
			navLinks[i].className = "large-nav-animation";
		});
	}

	// Added to provide a way back to portfolio site without using the browser's back button
	document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", '<div style="position:sticky;bottom:0;left:0;background-color:black;z-index:999999;width:fit-content;"><a href="../../projects.html"><p style="padding:5px;color:white;text-decoration:underline;">Return to projects</p></a></div>');
}

/*******************************************
 *             MOBILE NAV MENU              *
 *******************************************/

// Function that displays and hides the navigation menu
// for small viewports when the menu button is clicked
export function smallNav() {
	// Get dialog modal and button to add event listener that opens dialog modal
	let smallNav = document.getElementById("small-nav");
	let closeNavButton = document.getElementById("close-nav-button");

	// Open and add event listener to close small nav menu on button press
	smallNav.showModal();

	closeNavButton.addEventListener("click", () => {
		smallNav.close();
	});
}

/*******************************************
 *                 PICTURES                 *
 *******************************************/

export function addPictures() {
	// Get the name of the chosen set to use in the folder path
	let setsList = document.getElementById("picture-sets");
	let chosenSet = setsList.options[setsList.selectedIndex].value;

	// If no set has been chosen when the view button is pressed, do not run
	if (chosenSet != -1) {
		// Reset the contents of the picture set container before adding another set
		let currentSet = PICTURE_SETS_ARRAY[chosenSet];
		let picSetContainer = document.getElementById("picture-set-container");

		picSetContainer.innerHTML = "";

		for (let i = 1; i < PICTURE_SETS_ARRAY[chosenSet].length; i++) {
			// Create a container for each picture and
			// add the img-box class for styling purposes
			let pictureBox = document.createElement("div");
			pictureBox.setAttribute("class", "img-box");

			// Create the img element and add the appropriate source and attributes
			let img = document.createElement("img");
			img.src = "media\\pictures\\" + PICTURE_SETS_ARRAY[chosenSet][0] + "\\" + currentSet[i];
			img.alt = currentSet[i];
			img.title = currentSet[i];

			// Add an onclick event listener that adds the selected image
			// to a dialog modal to show an enlarged view of the image
			img.addEventListener("click", (e) => {
				let imgClone = e.target.cloneNode();
				let imageName = document.createElement("h3");
				imageName.innerText = imgClone.alt;
				enlargePictureDialog.insertBefore(imgClone, enlargePictureDialog.firstChild);
				enlargePictureDialog.insertBefore(imageName, enlargePictureDialog.lastElementChild);
				enlargePictureDialog.showModal();
			});

			// Add the image, and then place it in the pictureBox container
			pictureBox.appendChild(img);
			picSetContainer.appendChild(pictureBox);
		}
	}

	let enlargePictureDialog = document.getElementById("fullscreen");
	enlargePictureDialog.addEventListener("click", () => {
		// Close the dialog modal and reset the
		// inner HTML so it is ready to be used again
		enlargePictureDialog.close();
		enlargePictureDialog.innerHTML = "<p>Click or tap anywhere to close</p>";
	});
}

export function addSetOptions() {
	// Add the index value and name of each picture set in the
	// PICTURE_SET_ARRAY as options in the select element
	let setsList = document.getElementById("picture-sets");

	for (let i = 0; i < PICTURE_SETS_ARRAY.length; i++) {
		let listItem = document.createElement("option");
		listItem.setAttribute("value", i);
		listItem.textContent = PICTURE_SETS_ARRAY[i][0];
		setsList.appendChild(listItem);
	}
}

/*******************************************
 *                 EVENTS                   *
 *******************************************/

export function addEvents() {
	// Get and sort array by event date
	let events = sortEvents(EVENTS_ARRAY);

	// Get the current date
	let currentDate = new Date();

	// Extract the current year, month, and date for comparisons
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	// Get the elements that will hold the events on the page
	let pastEventsSection = document.getElementById("past-events");
	let currentEventsSection = document.getElementById("current-events");
	let futureEventsSection = document.getElementById("future-events");

	for (let i = 0; i < events.length; i++) {
		// Get current event date and description to display on the page
		let eventDate = new Date(events[i][0]);
		let eventDiv = createEventElement(eventDate, events, i);

		// Get the year, month, and date of current event
		// in the array to compare to the current date
		let eventYear = eventDate.getFullYear();
		let eventMonth = eventDate.getMonth();
		let eventDay = eventDate.getDate();

		if (eventDate < currentDate) {
			//  Add to past events
			pastEventsSection.appendChild(eventDiv);
		} else if (eventYear === currentYear && eventMonth === currentMonth && eventDay >= currentDay) {
			// Add to current month events
			currentEventsSection.appendChild(eventDiv);
		} else if (eventYear > currentYear || (eventYear === currentYear && eventMonth > currentMonth)) {
			// Add to future events
			futureEventsSection.appendChild(eventDiv);
		}
	}

	// Create default text for the sections with no events
	let noEvents = document.createElement("h3");
	noEvents.textContent = "No events here currently, check back later.";

	// If there are no events for the specified section, apply the default text
	if (pastEventsSection.childElementCount === 1) {
		pastEventsSection.appendChild(noEvents.cloneNode(true));
	}

	if (currentEventsSection.childElementCount === 1) {
		currentEventsSection.appendChild(noEvents.cloneNode(true));
	}

	if (futureEventsSection.childElementCount === 1) {
		futureEventsSection.appendChild(noEvents.cloneNode(true));
	}
}

// Properly sorts an array of events and returns the sorted array
export function sortEvents(eventsArray) {
	// Create new array to hold events for sorting
	let sortedEvents = new Array();

	// Convert dates into milliseconds since January 1, 1970 using getTime()
	// method and add them to array along with event descriptions
	for (let i = 0; i < eventsArray.length; i++) {
		let currentTime = new Date(eventsArray[i][0]).getTime();
		let currentEvent = eventsArray[i][1];

		sortedEvents.push([currentTime, currentEvent]);
	}

	// Sort events array now that dates are all sortable integer values
	sortedEvents.sort();

	// Return sorted array
	return sortedEvents;
}

// Create element and store event information in it
export function createEventElement(eventDate, events, eventIndex) {
	// Format dates using these parameters
	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	// Create elements to house event information
	let eventDateH3 = document.createElement("h3");
	let eventDescriptionP = document.createElement("p");
	let eventDiv = document.createElement("div");
	eventDiv.setAttribute("class", "event");

	// Add content to event element from the specified index of the events array
	eventDateH3.textContent = eventDate.toLocaleDateString("en-US", options);
	eventDescriptionP.textContent = events[eventIndex][1];
	eventDiv.append(eventDateH3, eventDescriptionP);

	// Return the created event element
	return eventDiv;
}

/*******************************************
 *                  NEWS                   *
 *******************************************/

export function addNews(xIndex, newsContainer) {
	// Create elements to house news items
	let newsBox = document.createElement("article");
	let h3Element = document.createElement("h3");
	let pElement = document.createElement("p");
	newsBox.setAttribute("class", "news-box");

	// Check if array is empty
	if (NEWS_ARRAY.length != 0) {
		// Add news header and body from the news it at the array index
		h3Element.textContent = NEWS_ARRAY[xIndex][0];
		pElement.textContent = NEWS_ARRAY[xIndex][1];
	} else {
		h3Element.textContent = "No news currently...";
		pElement.textContent = "Check back later.";
	}

	// Add elements to news container and add news
	// container to the specified element on the page
	newsBox.appendChild(h3Element);
	newsBox.appendChild(pElement);

	newsContainer.appendChild(newsBox);
}
