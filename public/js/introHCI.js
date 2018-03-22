'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project-img').click(clickHandler);
}

function clickHandler(e) {
	// Prevent following the link
	e.preventDefault();
	window.location.href = this.id;
}
