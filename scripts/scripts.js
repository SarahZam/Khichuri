// don't execute any JS until after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

	// create "handles" on the buttons from the HTML
	var _______________ = document.getElementById("_______________");
	var _______________ = document.getElementById("_______________");

	// create "handles" on the lists
	var _______________ = document.getElementById("_______________");
	var _______________ = document.getElementById("_______________");

	// get the lengths of the lists
	_______________ = _______________.children.length;
	_______________ = _______________.children.length;

	// for each item in the lists, set their display value to "none" (hide them)
	for (var i = 0; i < _______________; i++) {
		_______________.children[i].style.display="none";
	}
	for (var i = 0; i < _______________; i++) {
		_______________.children[i].style.display="none";
	}

	// setup a counter for the list
	_______________ = 0;
	// wait for the user to click the button, then "revert" (show item) the next
	//. item in the list
	_______________.addEventListener("click", function() {
		_______________.children[_______________].style.display="revert";
		_______________++;
	});

	// setup a counter for the list
	_______________ = 0;
	// wait for the user to click the button, then "revert" (show item) the next
	//. item in the list
	_______________.addEventListener("click", function() {
		_______________.children[_______________].style.display="revert";
		_______________++;
	});
});