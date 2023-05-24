const moment = require("moment");

function calculateAge(birthday: any) {
    const today = moment();
    const birthDate = moment(birthday, "DD-MM-YYYY");
    const age = today.diff(birthDate, "years");
    return age;
}

export { calculateAge };
