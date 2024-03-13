"use strict";
// Script written by Silas Callahan

// Import functions and variables as necessary from other files
import { EVENTS_ARRAY } from "./storage-arrays/eventsArray.js";
import { PICTURE_SETS_ARRAY } from "./storage-arrays/pictureSetsArray.js";

// Run initialization function on page load
window.addEventListener("load", init);

function init() {
	// Add a title attribute to clarify that the nav link with current-page ID is the current page
	let currentPage = document.getElementById("current-page");
	// Only run on a main pages which have the current-page ID
	if (currentPage != null) {
		currentPage.setAttribute("title", "This is the current page");
	}

	// Gets the small nav button and changes the menu display property on click
	let smallNavButton = document.getElementById("small-nav-button");
	smallNavButton.addEventListener("click", (e) => {
		let smallNavMenu = e.target.nextElementSibling;
		if (smallNavMenu.style.display !== "grid") {
			smallNavMenu.style.display = "grid";
		} else {
			smallNavMenu.style.display = "none";
		}
	});

	// Loop that adds an animation utility class to the nav links
	// so the animation does not play on page load, but instead
	// on first mouseover event
	let navLinks = document.querySelectorAll("nav ul li a");

	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("mouseover", () => {
			navLinks[i].className = "nav-animation";
		});
	}
	
	// Added to provide a way back to portfolio site without using the browser's back button
	document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", '<div style="position:sticky;bottom:0;left:0;background-color:black;z-index:999999;width:fit-content;"><a href="../../projects.html"><p style="padding:5px;color:white;text-decoration:underline;">Return to projects</p></a></div>');
}

/*******************************************
 *                 NEWSLETTERS             *
 *******************************************/

export function showNewsletters() {
	// Get newletter container and select elements
	let newsYears = document.getElementsByClassName("news-year");
	let yearSelect = document.getElementById("news-year-selector");

	// Adds existing years to the select element
	for (let i = 0; i < newsYears.length; i++) {
		let newsYear = newsYears[i].getAttribute("value");
		let newOption = document.createElement("option");
		newOption.innerText = newsYear;

		yearSelect.appendChild(newOption);
	}

	yearSelect.addEventListener("change", () => {
		// Get and clear the contents of the news box
		let newsBox = document.getElementById("news-box");
		newsBox.innerHTML = "";

		let newsLetter = newsYears[yearSelect.selectedIndex - 1].children;

		for (let i = 0; i < newsLetter.length; i++) {
			newsBox.appendChild(newsLetter[i].cloneNode(true));
		}
	});
}

/*******************************************
 *                 PICTURES                *
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
			// Create a container for each picture and add the img-box class for styling purposes
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
 *                 EVENTS                  *
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
		day: "numeric"
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
