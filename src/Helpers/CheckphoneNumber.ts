export function getMobileNumberOperator(mobileNumber: string): string | null {
    let operatorPrefix: { [key: string]: string[] } = {
        airtel: ["068", "069", "078"],
        vodacom: ["074", "075", "076"],
        tigo: ["065", "067", "071"],
        halotel: ["062"],
        ttcl: ["073"],
    };

    // Remove any non-digit characters from the mobile number
    const cleanMobileNumber: string = mobileNumber.replace(/\D/g, "");

    // Validate the mobile number format
    const isValidFormat: boolean = /^0[6789]\d{8}$/.test(cleanMobileNumber);

    if (!isValidFormat) {
        return null; // Invalid format
    }

    // Find the operator of the mobile number
    const operator: string | undefined = Object.keys(operatorPrefix).find(
        (key: string) => {
            return operatorPrefix[key]?.some((prefix: string) =>
                cleanMobileNumber.startsWith(prefix)
            );
        }
    );

    return operator || null; // Return the operator or null if not found
}
