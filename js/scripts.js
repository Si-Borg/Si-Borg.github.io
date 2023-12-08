// TODO: Neither of these seem efficient, figure out how to improve it.

// Applies an effect that makes it look like the
// element wobbles when you hover over it
export function wobbleEffect(event) {
	// Prevent grabbing the image
	event.preventDefault();
	let effectTarget = event.target;

	// Sets the coordinates relative to the center and size of the element
	let mouseX = (event.offsetX - effectTarget.offsetHeight / 2) / (effectTarget.offsetHeight * 2500);
	let mouseY = (event.offsetY - effectTarget.offsetWidth / 2) / (effectTarget.offsetWidth * 2500);

	effectTarget.style.transform =
		"matrix3d(\
    1, 0, 0, " +
		mouseX +
		", \
    0, 1, 0, " +
		mouseY +
		", \
    0, 0, 1, 0, \
    0, 0, 0, 1)";
}

// Applies an effect that makes it look like the
// element wobbles when you touch it
export function mobileWobbleEffect(event) {
	// Prevent scrolling while touching the element
	event.preventDefault();
	let effectTarget = event.target;
	let bcr = event.target.getBoundingClientRect();

	// Sets the coordinates relative to the center and size of the element
	let touchX = (event.targetTouches[0].clientX - bcr.x - effectTarget.offsetHeight / 2) / (effectTarget.offsetHeight * 2500);
	let touchY = (event.targetTouches[0].clientY - bcr.y - effectTarget.offsetWidth / 2) / (effectTarget.offsetWidth * 2500);

	effectTarget.style.transform =
		"matrix3d(\
    1, 0, 0, " +
		touchX +
		", \
    0, 1, 0, " +
		touchY +
		", \
    0, 0, 1, 0, \
    0, 0, 0, 1)";
}
