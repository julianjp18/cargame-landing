import { UPLOAD_DRIVER_DOCS } from '../constants';
import notify from '../../../helpers/notify';
import { firestoreDB, firebaseInit, firebaseStorage } from '../../../../components/utils/firebase';
import { openNotification } from '../../../helpers/extras';

const addDoc = async ({ data, fieldName, id }) => {
  let document = {
    ...data,
    [`${fieldName}_createdAt`]: firebaseInit.firestore.FieldValue.serverTimestamp(),
    [`${fieldName}_updatedAt`]: firebaseInit.firestore.FieldValue.serverTimestamp(),
  };

  let docRef = firestoreDB.collection('Drivers').doc(id);
  docRef.get().then((thisDoc) => {
    if (thisDoc.exists) {
      docRef.update({
        documents: {
          ...thisDoc.data().documents ?? {},
          ...document
        },
      });
    }
  }).catch((error) => {
    console.log(error.message);
  });
};

const uploadDriverDocsNotifier = (formValues) =>
  notify({
    type: UPLOAD_DRIVER_DOCS,
    formValues,
  });

function* uploadDriverDocsAction({ formValues }) {
  const {
    drivenLicenseBack,
    drivenLicenseFront,
    driverPhoto,
    expireLicense,
    expirePropertyCard,
    id,
    identificationBack,
    identificationFront,
    mecanictecnic,
    propertyCardBack,
    propertyCardFront,
    soat,
  } = formValues;
  const response = [];
  const storageRef = firebaseStorage.ref();

  const driverLicenseBackStorageRef = storageRef.child(`drivers/${id}/${drivenLicenseBack.name}`);
  yield driverLicenseBackStorageRef.put(drivenLicenseBack);


  yield addDoc({
    path: driverLicenseBackStorageRef.fullPath,
  }, 'drivenLicenseBack', id);
}

export { uploadDriverDocsAction, uploadDriverDocsNotifier };
