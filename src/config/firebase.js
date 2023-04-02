
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCVxfz5Eah28lA8JWir_iUzqCcng6L96aA",
  authDomain: "tik-tok---jornada-dev.firebaseapp.com",
  projectId: "tik-tok---jornada-dev",
  storageBucket: "tik-tok---jornada-dev.appspot.com",
  messagingSenderId: "531976982935",
  appId: "1:531976982935:web:097e5184e9360a58f434d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;