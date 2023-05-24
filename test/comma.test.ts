// @ts-expect-error TS(2307): Cannot find module '../src/Helpers/Comma' or its c... Remove this comment to see the full error message
import { addComma, removeComma } from "../src/Helpers/Comma";

describe("comma function from helpers", () => {
    test("add comma to 1000", function () {
        let numberwithComma = addComma("1000");

        let numberOfComma = numberwithComma.replace(/[^,]/g, "").length;

        expect(numberOfComma).toBe(1);
    });

    test("add comma to 1000000", function () {
        let numberwithComma = addComma("1000000");

        let numberOfComma = numberwithComma.replace(/[^,]/g, "").length;

        expect(numberOfComma).toBe(2);
    });

    test("remove comma to number", function () {
        let numberWithoutComma = removeComma("10,000");

        expect(numberWithoutComma).not.toMatch(/,/);
    });
});
