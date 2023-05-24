import { firebase } from "./FirebaseConfig";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'rand... Remove this comment to see the full error message
import randomstring from "randomstring";

async function uploadImageToFirebase(image: any) {
    try {
        let response = await fetch(image.uri);

        let blob = await response.blob();

        let filename = randomstring.generate(18).toLocaleLowerCase();

        let ref = await firebase.storage().ref().child(filename).put(blob);

        return ref;
    } catch (error) {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return error.message;
    }
}

export { uploadImageToFirebase };
