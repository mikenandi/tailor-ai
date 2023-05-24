import * as MediaLibrary from "expo-media-library";

async function getPhotos() {
    let { status } = await MediaLibrary.requestPermissionsAsync();

    let media = await MediaLibrary.getAssetsAsync({
        mediaType: "photo",
        first: 300,
        sortBy: "creationTime",
    });

    return media.assets;
}

export { getPhotos };
