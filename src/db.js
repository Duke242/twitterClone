import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCRZmy-XrxdHnACPvlZSJXIHkzzc6_5Grc",
  authDomain: "twitterclone-cd15b.firebaseapp.com",
  projectId: "twitterclone-cd15b",
  storageBucket: "twitterclone-cd15b.appspot.com",
  messagingSenderId: "858124275294",
  appId: "1:858124275294:web:eecfe4a76c54fe73bdeecf",
  measurementId: "G-G1JP72GPF6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
