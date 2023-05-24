// Function to add space after every three charractes
function addSpace(input: any) {
    let numberWithComma = input
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/gi, " ");

    return numberWithComma;
}

function removeSpace(input: any) {
    let numberWithoutComma = input.toString().replace(/[\ \,]/gi, "");

    return numberWithoutComma;
}

export { addSpace, removeSpace };
