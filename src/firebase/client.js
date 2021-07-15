import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyARbdCwLddmKwOZWvvJUscp3BIXXD1UkUM",
    authDomain: "postaldemates-4279c.firebaseapp.com",
    projectId: "postaldemates-4279c",
    storageBucket: "postaldemates-4279c.appspot.com",
    messagingSenderId: "677935878902",
    appId: "1:677935878902:web:4de807ef3f2600475952d7",
});

export const getFirebase = () => {
    return firebaseConfig;
};

export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
};

export const getStorage = () => {
    return firebase.storage();
};
