// TODO: Neither of these seem efficient, figure out how to improve it.
/**
  * Applies an effect that makes it look like the
  * element wobbles when you hover over it.
  * 
  * @param {MouseEvent} event -Event that has the position of the mouse cursor on the element
  */
export function wobbleEffect(event) {

	// Prevent grabbing of the image
	event.preventDefault();

	let effectTarget = event.target;

	// Check for effect removal class and remove it if necessary
	if (effectTarget.classList.contains("revert-transform")) {
		effectTarget.classList.remove("revert-transform");
	}

	let offsetHeight = effectTarget.offsetHeight;
	let offsetWidth = effectTarget.offsetWidth;

	// Sets the coordinates relative to the center and size of the element
	let mouseX = (event.offsetX - offsetHeight / 2) / (offsetHeight * 2000);
	let mouseY = (event.offsetY - offsetWidth / 2) / (offsetWidth * 2000);

	// This part convert postion of the mouse to a float from zero to one
	let brightness = (offsetHeight - event.offsetY) / offsetHeight;

	// Logorithmic function to reduce the brightness in a natural way
	brightness = logBrightness(brightness);

	// Apply the effects to the element
	effectTarget.style.filter = `brightness(${brightness})`;

	effectTarget.style.transform = `matrix3d(\
    1, 0, 0, ${mouseX}, \
    0, 1, 0, ${mouseY}, \
    0, 0, 1, 0, \
    0, 0, 0, 1)`;
}

/**
  * Applies an effect that makes it look like the
  * element wobbles when you touch it.
  * 
  * @param {TouchEvent} event 
  */
export function mobileWobbleEffect(event) {
	// Prevent scrolling while touching the element
	event.preventDefault();
	
	let effectTarget = event.target;

	// Check for effect removal class and remove it if necessary
	if (effectTarget.classList.contains("revert-transform")) {
		effectTarget.classList.remove("revert-transform");
	}
	let bcr = event.target.getBoundingClientRect();

	let offsetHeight = effectTarget.offsetHeight;
	let offsetWidth = effectTarget.offsetWidth;

	// Sets the coordinates relative to the center and size of the element
	let touchX = (event.targetTouches[0].clientX - bcr.x - offsetHeight / 2) / (offsetHeight * 2500);
	let touchY = (event.targetTouches[0].clientY - bcr.y - offsetWidth / 2) / (offsetWidth * 2500);

	// This part converts postion of the mouse to a float from zero to one
	let brightness = (offsetHeight - event.targetTouches[0].clientY) / offsetHeight;

	// Logorithmic function to reduce the brightness in a natural way
	brightness = logBrightness(brightness);
	
	// Apply the effects to the element
	effectTarget.style.filter = `brightness(${brightness})`;

	effectTarget.style.transform = `matrix3d(\
		1, 0, 0, ${touchX}, \
		0, 1, 0, ${touchY}, \
		0, 0, 1, 0, \
		0, 0, 0, 1)`;
}

/**
  * Use an IntersectionObserver to apply and remove effects
  * when the elements come into view.
  *
  * @param {NodeList} nodeList - List of nodes to watch using intersection observer
  * @param {String} effectClass - Name of the utility class that adds the animation
  */
export function onViewEffect(nodeList, effectClass) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			entry.target.style.opacity = "0";
			if (entry.isIntersecting) {
				entry.target.classList.add(effectClass);
			}
			// else {
			// 	entry.target.classList.remove(effectClass);
			// }
		});
	});

	nodeList.forEach((node) => {
		observer.observe(node);
	});
}

/**
  * Takes the brightness sent with the function call and returns
  * a value that follow a logorithmic curve.
  * 
  * @param {brightDec} float - A decimal value representing the brightness of the filter
  */
function logBrightness(brightDec) {
	
	// Checks to make sure the output will be in an acceptable range
	if (brightDec > 1) {
		brightDec = 1.04;
	} else if (brightDec < 0) {
		brightDec = 0.8;
	} else {
		brightDec = Math.log10(brightDec + 1) * 0.8 + 0.8;
	}

	return brightDec;
}

/**
  * Sets a timeout for the effect on the profile image on the home page.
  * 
  * @param {HTMLElement} profileImg - Element that has the transformation applied to it that will be reversed
  */
export function profileTimeOut(profileImg) {
	// Set the initial state and timer variables
	let isTransformed = false;
	let timeoutId;

	let transformCheck = () => {
		// If the element is transformed, reset the timer
		isTransformed = true;
		if (isTransformed) {
			clearTimeout(timeoutId);
		}
	};

	let transformReset = () => {
		// If the element is transformed,
		// set the timer to revert the transformation
		if (isTransformed) {
			timeoutId = setTimeout(() => {
				// Add class and remove filter to smoothly revert effects
				profileImg.classList.add("revert-transform");
				profileImg.style.filter = "none";

				isTransformed = false;
			}, 1000);
		}
	};

	// Listen for the mouse or touch event to start
	profileImg.addEventListener("mouseover", transformCheck);
	profileImg.addEventListener("touchmove", transformCheck);

	// Mouseleave event listener
	profileImg.addEventListener("mouseleave", transformReset);
	profileImg.addEventListener("touchend", transformReset);
	profileImg.addEventListener("touchcancel", transformReset);
}
