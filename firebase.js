// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP_fk_eHVaQBoErK5GpwKO8qKYlBbU1sg",
  authDomain: "inventory-management-1a2ed.firebaseapp.com",
  projectId: "inventory-management-1a2ed",
  storageBucket: "inventory-management-1a2ed.appspot.com",
  messagingSenderId: "89233110704",
  appId: "1:89233110704:web:99b95ecfc007a4882ced75",
  measurementId: "G-MMXZTSBZKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };
