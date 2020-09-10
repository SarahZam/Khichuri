// don't execute any JS until after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

	// create "handles" on the buttons from the HTML
	var ingredientNextButton = document.getElementById("ingredientNext");
	var stepsNextButton = document.getElementById("stepNext");

	// create "handles" on the lists
	var ingredientsList = document.getElementById("ingredientsList");
	var stepsList = document.getElementById("stepList");

	// get the lengths of the lists
	var ingredientsListLength = ingredientsList.children.length;
	var stepsListLength = stepsList.children.length;

	// for each item in the lists, set their display value to "none" (hide them)
	for (var i = 0; i < ingredientsListLength; i++) {
		ingredientsList.children[i].style.display="none";
	}
	for (var i = 0; i < stepsListLength; i++) {
		stepsList.children[i].style.display="none";
	}
	//calling function
	ingredientShowsNext(ingredientsListLength,ingredientsList,ingredientNextButton);
	//calling function for steps
	stepsShowNext(stepsListLength,stepsList,stepsNextButton);

	//for showing description
	var aboutHead = document.getElementById("aboutHead");
	var description = document.getElementById("description");
	showDescription(aboutHead,description);

});

// function to wait for the user to click the button, then "revert" (show item) the next
function ingredientShowsNext(ingredientsListLength, ingredientsList, ingredientNextButton){
	var ingredientsListHead = 0;
	ingredientNextButton.addEventListener("click", function () {
		if(ingredientsListHead < ingredientsListLength){
			ingredientsList.children[ingredientsListHead].style.display="revert";
		}
		ingredientsListHead++;
	});
}

//function to wait for user to click button and reverting the item for steps
function stepsShowNext(stepsListLength, stepsList, stepsNextButton){
	var stepsListHead = 0;
	stepsNextButton.addEventListener("click",function () {
		if(stepsListHead<stepsListLength){
			stepsList.children[stepsListHead].style.display="revert";
		}
		stepsListHead++;
	})
}


//shows the description when u hover over heading
function showDescription(aboutHead, description) {
	description.style.display="none";
	aboutHead.addEventListener("mouseenter", function () {
		description.style.display="revert";
	})
	aboutHead.addEventListener("mouseleave",function () {
		description.style.display="none";
	})
}

