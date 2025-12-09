// These functions will check the value of the parameter 'answer'
function checkClick(answer){
	event.preventDefault();
	if(answer == 'true'){
		alert("Correct!!");
	} else{
		alert("Incorrect!\nThat is why the planet is called the 'Blue Planet'");
	}
}
function checkClick2(answer){
	event.preventDefault();
	if(answer == 'false'){
		alert("Correct!! We have only explored about the 5% of the world's oceans.\nThere is a lot more to be discovered!!");
	} else{
		alert("Wrong!\nWe have only explored about the 5% of the world's oceans.\n\nThat's actually scary!!");
	}
}
function checkClick3(answer){
	event.preventDefault();
	if(answer == 'true'){
		alert("Nailed it!! Unlike in humans and most species, the sex is determined by genetics, the sex of baby sea turtles is determined by the temperature of the nest during incubation.\nThis fascninating phenomenon is called temperature-dependent sex determination or 'TSD'");
	} else{
		alert("Wrong!\nUnlike in humans and most species, the sex is determined by genetics, the sex of baby sea turtles is determined by the temperature of the nest during incubation.\nThis fascninating phenomenon is called temperature-dependent sex determination or 'TSD'");
	}
}
function checkClick4(answer){
	event.preventDefault();
	if(answer == 'true'){
		alert("That is true!! According to the International Union for Conservation of Nature (IUCN), there are over 1,550 marine species at risk of extinction. Of these, sharks and rays are the group most critically at risk.");
	} else{
		alert("Wrong!\nAccording to the International Union for Conservation of Nature (IUCN), there are over 1,550 marine species at risk of extinction. Of these, sharks and rays are the group most critically at risk");
	}
}




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))	


// Get involved code

document.getElementById("showOnclick").style.display = "none";

function toggleHide(){
	var x = document.getElementById("showOnclick");
	if(x.style.display === "none"){
		x.style.display = "block";
	}else{
		x.style.display = none;
	}
	
}