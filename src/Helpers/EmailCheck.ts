// Function to check if a string is email or not.
function isEmail(emailAdress: string): boolean {
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (emailAdress.match(regexEmail)) return true;

	return false;
}

export {isEmail};
