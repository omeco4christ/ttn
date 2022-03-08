import RNFetchBlob from 'rn-fetch-blob';
import {launchImageLibrary} from 'react-native-image-picker';

export const uploadImageFromStorage = () => {
  return new Promise((resolve, reject) => {
    launchImageLibrary(
      {includeBase64: true, maxHeight: 850, maxWidth: 720, mediaType: 'photo'},
      async response => {
        const image = response.assets[0];
        resolve(image);
      },
    );
  });
};

export const uploadImageToServer = image => {
  return new Promise((resolve, reject) => {
    RNFetchBlob.fetch(
      'POST',
      'https://dev-api.tellit.io/api/v1/upload',
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'file',
          filename: image.fileName,
          type: image.type,
          data: RNFetchBlob.wrap(image.uri),
        },
      ],
    )
      .then(res => {
        let parsedData = JSON.parse(res.data);
        console.log(parsedData.data);
        if (parsedData) {
          resolve(parsedData.data.url);
        }
      })
      .catch(err => reject(err));
  });
};

export const uploadImageFromStorageToServer = async () => {
  const imageFromStorage = await uploadImageFromStorage();
  return await uploadImageToServer(imageFromStorage);
};
