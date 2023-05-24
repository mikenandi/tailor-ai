import valid from "card-validator";
// @ts-expect-error TS(2307): Cannot find module './Utilities' or its correspond... Remove this comment to see the full error message
import { removeNonNumber, removeLeadingSpaces } from "./Utilities";
// @ts-expect-error TS(2307): Cannot find module 'lodash.pick' or its correspond... Remove this comment to see the full error message
import pick from "lodash.pick";

const limitLength = (string = "", maxLength: any) => string.substr(0, maxLength);
const addGaps = (string = "", gaps: any) => {
    const offsets = [0].concat(gaps).concat([string.length]);

    return offsets
        .map((end, index) => {
            if (index === 0) return "";
            const start = offsets[index - 1];
            // @ts-expect-error TS(2345): Argument of type 'number | undefined' is not assig... Remove this comment to see the full error message
            return string.substr(start, end - start);
        })
        .filter((part) => part !== "")
        .join(" ");
};

const FALLBACK_CARD = { gaps: [4, 8, 12], lengths: [16], code: { size: 3 } };

export default class CCFieldFormatter {
    _displayedFields: any;
    constructor(displayedFields: any) {
        this._displayedFields = [...displayedFields, "type"];
    }

    formatValues = (values: any) => {
        const card = valid.number(values.number).card || FALLBACK_CARD;

        return pick(
            {
                // @ts-expect-error TS(2339): Property 'type' does not exist on type '{ gaps: nu... Remove this comment to see the full error message
                type: card.type,
                number: this._formatNumber(values.number, card),
                expiry: this._formatExpiry(values.expiry),
                cvc: this._formatCVC(values.cvc, card),
                name: removeLeadingSpaces(values.name),
                postalCode: removeNonNumber(values.postalCode),
            },
            this._displayedFields
        );
    };

    _formatNumber = (number: any, card: any) => {
        const numberSanitized = removeNonNumber(number);
        const maxLength = card.lengths[card.lengths.length - 1];
        const lengthSanitized = limitLength(numberSanitized, maxLength);
        const formatted = addGaps(lengthSanitized, card.gaps);
        return formatted;
    };

    _formatExpiry = (expiry: any) => {
        const sanitized = limitLength(removeNonNumber(expiry), 4);
        if (sanitized.match(/^[2-9]$/)) {
            return `0${sanitized}`;
        }
        if (sanitized.length > 2) {
            return `${sanitized.substr(0, 2)}/${sanitized.substr(
                2,
                sanitized.length
            )}`;
        }
        return sanitized;
    };

    _formatCVC = (cvc: any, card: any) => {
        const maxCVCLength = card.code.size;
        return limitLength(removeNonNumber(cvc), maxCVCLength);
    };
}
