function validateForm( event ){
	console.log("ok we are validating form");
	console.log("check the lenth and check the type of the input fields");
	return true;
}

function validateType(){
	console.log("checks the type");
	console.log("check integer and check string");
	
}

function validateLength(){
	console.log("chekc the length  > 0");	
}

var form = document.getElementById("new-pet-form");

console.log( form );

// form.addEventListener( 'submit', validateForm);

