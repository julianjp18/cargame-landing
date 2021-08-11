import { UPLOAD_DRIVER_DOCS, UPLOAD_DOCS_FOR_CHANGE } from '../constants';
import notify from '../../../helpers/notify';
import { firestoreDB, firebaseInit, firebaseStorage } from '../../../../components/utils/firebase';
import { openNotification } from '../../../helpers/extras';

const fileToBlob = async (file) => await new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    resolve(xhr.response);
  };
  xhr.onerror = function() {
    reject(new TypeError("Network request failed"));
  };
  xhr.responseType = "blob";
  xhr.open("GET", file, true);
  xhr.send(null);
});

const fileToFormData = (file) => {
  let formData = new FormData();
  formData.append("image", file);
  console.log("the form data", formData);
  return formData;
};

const addDoc = async (data, fieldName, id, isDates = false) => {
  if (isDates) {
    let docRef = firestoreDB.collection('Drivers').doc(id);
    docRef.get().then((thisDoc) => {
      if (thisDoc.exists) {
        docRef.update({
          [fieldName]: data,
        });
      }
    }).catch((error) => {
      console.log(error.message);
    });
  } else {
    let document = {
      path: data,
      createdAt: firebaseInit.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebaseInit.firestore.FieldValue.serverTimestamp(),
    };
  
    let docRef = firestoreDB.collection('Drivers').doc(id);
    docRef.get().then((thisDoc) => {
      if (thisDoc.exists) {
        docRef.update({
          [`${fieldName}_document`]: {
            ...document,
          },
        });
      }
    }).catch((error) => {
      console.log(error.message);
    });
  }
};

const updateDoc = async (data, fieldName, id, documentName) => {
  let document = {
    path: data,
    createdAt: firebaseInit.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebaseInit.firestore.FieldValue.serverTimestamp(),
  };

  let docRef = firestoreDB.collection(documentName).doc(id);
  docRef.get().then((thisDoc) => {
    if (thisDoc.exists) {
      docRef.update({
        [`${fieldName}_document`]: {
          ...document,
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
    expireMecanictecnic,
    expireSoat,
    id,
    identificationBack,
    identificationFront,
    mecanictecnic,
    propertyCardBack,
    propertyCardFront,
    soat,
  } = formValues;

  try {
    const storageRef = firebaseStorage.ref();

    const driverLicenseBackStorageRef = storageRef.child(`drivers/${id}/drivenLicenseBack-${drivenLicenseBack[0].name}`);
    yield driverLicenseBackStorageRef.put(drivenLicenseBack[0], { contentType: drivenLicenseBack[0].type });

    const drivenLicenseFrontStorageRef = storageRef.child(`drivers/${id}/drivenLicenseFront-${drivenLicenseFront[0].name}`);
    yield drivenLicenseFrontStorageRef.put(drivenLicenseFront[0], { contentType: drivenLicenseFront[0].type });

    const driverPhotoStorageRef = storageRef.child(`drivers/${id}/driverPhoto-${driverPhoto[0].name}`);
    yield driverPhotoStorageRef.put(driverPhoto[0], { contentType: driverPhoto[0].type });

    const identificationBackStorageRef = storageRef.child(`drivers/${id}/identificationBack-${identificationBack[0].name}`);
    yield identificationBackStorageRef.put(identificationBack[0], { contentType: identificationBack[0].type });

    const identificationFrontStorageRef = storageRef.child(`drivers/${id}/identificationFront-${identificationFront[0].name}`);
    yield identificationFrontStorageRef.put(identificationFront[0], { contentType: identificationFront[0].type });

    const mecanictecnicStorageRef = storageRef.child(`vehiclesList/${id}/mecanictecnic-${mecanictecnic[0].name}`);
    yield mecanictecnicStorageRef.put(mecanictecnic[0], { contentType: mecanictecnic[0].type });

    const propertyCardBackStorageRef = storageRef.child(`vehiclesList/${id}/propertyCardBack-${propertyCardBack[0].name}`);
    yield propertyCardBackStorageRef.put(propertyCardBack[0], { contentType: propertyCardBack[0].type });

    const propertyCardFrontStorageRef = storageRef.child(`vehiclesList/${id}/propertyCardFront-${propertyCardFront[0].name}`);
    yield propertyCardFrontStorageRef.put(propertyCardFront[0], { contentType: propertyCardFront[0].type });

    const soatStorageRef = storageRef.child(`vehiclesList/${id}/soat-${soat[0].name}`);
    yield soatStorageRef.put(soat[0], { contentType: soat[0].type });

    yield addDoc(driverLicenseBackStorageRef.fullPath, 'drivenLicenseBack', id);
    yield addDoc(drivenLicenseFrontStorageRef.fullPath, 'drivenLicenseFront', id);
    yield addDoc(driverPhotoStorageRef.fullPath, 'driverPhoto', id);
    yield addDoc(identificationBackStorageRef.fullPath, 'identificationBack', id);
    yield addDoc(identificationFrontStorageRef.fullPath, 'identificationFront', id);
    yield addDoc(mecanictecnicStorageRef.fullPath, 'mecanictecnic', id);
    yield addDoc(propertyCardBackStorageRef.fullPath, 'propertyCardBack', id);
    yield addDoc(propertyCardFrontStorageRef.fullPath, 'propertyCardFront', id);
    yield addDoc(soatStorageRef.fullPath, 'soat', id);
    yield addDoc(expireLicense, 'expireLicense', id, true);
    yield addDoc(expireMecanictecnic, 'expireMecanictecnic', id, true);
    yield addDoc(expireSoat, 'expireSoat', id, true);
    yield addDoc(true, 'isInfoCompleted', id, true);
    
    openNotification('success', '¡Gracias por tu información!', 'La revisaremos y muy pronto te habilitaremos tu cuenta.');
  } catch (err) {
    console.log('error', err);
    openNotification('warning', '¡UPS!', 'Ocurrió un error, por favor intenta más tarde.');
  }

}

const uploadDocsForChangeNotifier = (formValues) =>
  notify({
    type: UPLOAD_DOCS_FOR_CHANGE,
    formValues,
  });

function* uploadDocsForChangeAction({ formValues }) {
  const { driverId, notificationSelected } = formValues;
  const { id } = notificationSelected;

  let isEmpty = true;

  try {
    const storageRef = firebaseStorage.ref();

    if (formValues.drivenLicenseBack?.length > 0 && formValues.drivenLicenseFront?.length > 0) {
      const driverLicenseBackStorageRef = storageRef.child(`drivers/${driverId}/drivenLicenseBack-${formValues.drivenLicenseBack[0].name}`);
      yield driverLicenseBackStorageRef.put(formValues.drivenLicenseBack[0], { contentType: formValues.drivenLicenseBack[0].type });
      yield updateDoc(driverLicenseBackStorageRef.fullPath, 'drivenLicenseBack', driverId, 'Drivers');
      const drivenLicenseFrontStorageRef = storageRef.child(`drivers/${driverId}/${formValues.drivenLicenseFront[0].name}`);
      yield drivenLicenseFrontStorageRef.put(formValues.drivenLicenseFront[0], { contentType: formValues.drivenLicenseFront[0].type });
      yield updateDoc(drivenLicenseFrontStorageRef.fullPath, 'drivenLicenseFront', driverId, 'Drivers');

      isEmpty = false;
    }

    if (formValues.driverPhoto?.length > 0) {
      const driverPhotoStorageRef = storageRef.child(`drivers/${driverId}/driverPhoto-${formValues.driverPhoto[0].name}`);
      yield driverPhotoStorageRef.put(formValues.driverPhoto[0], { contentType: formValues.driverPhoto[0].type });
      yield updateDoc(driverPhotoStorageRef.fullPath, 'driverPhoto', driverId, 'Drivers');

      isEmpty = false;
    }
    
    if (formValues.identificationFront?.length > 0 && formValues.identificationBack?.length > 0) {
      const identificationBackStorageRef = storageRef.child(`drivers/${driverId}/identificationBack-${formValues.identificationBack[0].name}`);
      yield identificationBackStorageRef.put(formValues.identificationBack[0], { contentType: formValues.identificationBack[0].type });
      yield updateDoc(identificationBackStorageRef.fullPath, 'identificationBack', driverId, 'Drivers');  

      const identificationFrontStorageRef = storageRef.child(`drivers/${driverId}/identificationFront-${formValues.identificationFront[0].name}`);
      yield identificationFrontStorageRef.put(formValues.identificationFront[0],  { contentType: formValues.identificationFront[0].type });
      yield updateDoc(identificationFrontStorageRef.fullPath, 'identificationFront', driverId, 'Drivers');

      isEmpty = false;
    }

    if (formValues.mecanictecnic?.length > 0) {
      const mecanictecnicStorageRef = storageRef.child(`vehiclesList/${id}/mecanictecnic-${formValues.mecanictecnic[0].name}`);
      yield mecanictecnicStorageRef.put(formValues.mecanictecnic[0], { contentType: formValues.mecanictecnic[0].type });
      yield updateDoc(mecanictecnicStorageRef.fullPath, 'mecanictecnic', id, 'VehiclesList');

      isEmpty = false;
    }
    
    if (formValues.propertyCardFront?.length > 0 && formValues.propertyCardBack?.length > 0) {
      const propertyCardBackStorageRef = storageRef.child(`vehiclesList/${id}/propertyCardBack-${formValues.propertyCardBack[0].name}`);
      yield propertyCardBackStorageRef.put(formValues.propertyCardBack[0], { contentType: formValues.propertyCardBack[0].type });
      yield updateDoc(propertyCardBackStorageRef.fullPath, 'propertyCardBack', id, 'VehiclesList');

      const propertyCardFrontStorageRef = storageRef.child(`vehiclesList/${id}/propertyCardFront-${formValues.propertyCardFront[0].name}`);
      yield propertyCardFrontStorageRef.put(formValues.propertyCardFront[0], { contentType: formValues.propertyCardFront[0].type });
      yield updateDoc(propertyCardFrontStorageRef.fullPath, 'propertyCardFront', id, 'VehiclesList');

      isEmpty = false;
    }
    
    if (formValues.soat?.length > 0) {
      const soatStorageRef = storageRef.child(`vehiclesList/${id}/soat-${formValues.soat[0].name}`);
      yield soatStorageRef.put(formValues.soat[0], { contentType: formValues.soat[0].type });
      yield updateDoc(soatStorageRef.fullPath, 'soat', id, 'VehiclesList');

      isEmpty = false;
    }
    
    if (isEmpty) {
      openNotification('warning', '¡Por favor completa todos los campos!', '');
    } else {
      openNotification('success', '¡Gracias por tu información!', 'La revisaremos y muy pronto te habilitaremos tu cuenta.');
      
    }
  } catch (err) {
    console.log(err);
    openNotification('warning', '¡UPS!', 'Ocurrió un error, por favor intenta más tarde.');
  }
}

export {
  uploadDocsForChangeNotifier,
  uploadDocsForChangeAction,
  uploadDriverDocsAction,
  uploadDriverDocsNotifier, 
};
