function validateForm( event ){
	
	var name = document.getElementById("nameInput");
	var species = document.getElementById("speciesInput");
	var age = document.getElementById("ageInput");
	
	console.log("name species input", name, species, input);
	
	console.log("ok we are validating form");
	console.log("check the lenth and check the type of the input fields");
	validateType();
	validateLength();
	return true;
}

function validateType(){
	console.log("checks the type");
	console.log("check integer and check string");
	
}

function validateLength(){
	console.log("chekc the length  > 0");	
}

// var form = document.getElementById("new-pet-form");

// console.log( form );

// form.addEventListener( 'submit', validateForm);

