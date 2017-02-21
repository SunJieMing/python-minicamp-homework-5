console.log('Hello World!');

document.getElementById('submit').addEventListener('click', function() {
	console.log('clicked!')
});

function validateForm() {
	var nameValue = document.getElementById('nameInput').value;
	var speciesValue = document.getElementById('speciesInput').value;
	var ageValue = document.getElementById('ageInput').value;

	if (!nameValue.length || !speciesValue.length || !ageValue.length) {
		alert('must not leave fields blank');
		return false;
	}
	if (typeof nameValue !== 'string' || typeof speciesValue !== 'string') {
		alert('name and species must be strings');
		return false;
	}	
	if (parseInt(ageValue) !== parseInt(ageValue)) {
		alert('age must be an integer');
		return false;
	}
	return true;
}