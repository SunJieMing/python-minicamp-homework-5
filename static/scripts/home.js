function validateForm(){
	
	var validType = false;
	var validLength = false;	

	var name = document.getElementById("nameInput");
	var species = document.getElementById("speciesInput");
	var age = document.getElementById("ageInput");
	
	var isNameValidType = validateType(name, 'string');
	var isSpeciesValidType = validateType(species, 'string');
	var isAgeValidType = validateType(age, 'integer');
	
	if ( isNameValidType && isSpeciesValidType && isAgeValidType ){
		console.log ( "name species age valid type");
		validType = true;
	}

	validateLength();
	return true;
}

function validateType( inputData, type ){
	
	return typeof( inputData) === type;
}

function validateLength(){
	console.log("chekc the length  > 0");	
}

// var form = document.getElementById("new-pet-form");

// console.log( form );

// form.addEventListener( 'submit', validateForm);

